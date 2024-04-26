import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Modal, Select, Table, message, Popconfirm, DatePicker, Skeleton } from 'antd';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { api } from '../api/api';
import axios from 'axios';
import dayjs from 'dayjs';
import { resources } from '../api/resources';


const Promo = () => {
  const [searchText, setSearchText] = useState('');
  const [promos, setPromos] = useState([]); 
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [workingId, setWorkingId] = useState('');
  const [editLoading, setEditLoading] = useState(false);
  const [loading, setLoading] = useState(false)

  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();

  const handleAddOk = async () => {
    setAddLoading(true)
    try {
        const values = await addForm.validateFields();
        if(values)  setAddModalOpen(false)

        const { data } = await api.post(resources.promoUrl, values)
        setPromos((prev) => {
            return [...prev, data]
        })
        message.success('Promo Added Succesfully')
        addForm.resetFields()

    } catch (error) {
        message.error("There was an error adding promo")
    }
    setAddLoading(false)
  }

  const handleAddCancel = () => setAddModalOpen(false)
  const showAddModal = () => setAddModalOpen(true)
  
  const handleEditCancel = async () => {
    await editForm.resetFields()
    setEditModalOpen(false);
  }

  const showEditModal = async (code) => {
    try {
        const { data } = await api.get(resources.promoUrl +`/${code}`)

        if(data) {
            editForm.setFieldsValue({ discountPercentage: data?.discountPercentage })
            setEditModalOpen(true);
            setWorkingId(data?.code);
        }
    } catch (error) {
        message.error("There was an error performing operation!")
    }
  }

  const handleSpaceDelete = async (code) => {
    try {
        await api.delete(resources.promoUrl+`/${code}`);
        setPromos((prev) => {
            return prev.filter(promo => promo.code !== code )
        })
        message.success('Promo deleted');
    } catch (error) {
        message.error('There was an error deleting space');
    }
  }

  const handleSpaceEdit = async () => {
    try {
        setEditLoading(true)
        const values = await editForm.validateFields()
        if(workingId) {
            const { data } = await api.patch(resources.promoUrl + `/${workingId}`, values)
            if(data) setEditModalOpen(false)
        }
    } catch (error) {
        message.error("There was an error performing operation!")
    }
    setEditLoading(false)

  }

  const fetchData = async() => {
      setLoading(true)
      try {
          const { data } = await api.get(resources.promoUrl)
          setPromos(data)

      } catch (error) {
          message.error('Network error!')
        //   console.log(error)
      }
      setLoading(false)
  }

  const handleRefresh = () => fetchData()

  useEffect(()=> {
    fetchData()
  }, [])


const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: '_id',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record?.code.toString().toLowerCase().includes(value.toLowerCase()) ||
        record?.type.toString().toLowerCase().includes(value.toLowerCase()) ||
        dayjs(record?.createdAt).format('DD/MM/YYYY').toString().toLowerCase().includes(value.toLowerCase())
      }, 
    
    },
    {
        title: "Type",
        dataIndex: 'type',
        key: '_id'
    },
    {
      title: 'Percentage %',
      dataIndex: 'discountPercentage',
      key: '_id',
    },
    {
      title: 'Expiring Date',
      dataIndex: 'expiringPromoDate',
      key: '_id',
      render: (date) => dayjs(date).format('DD/MM/YYYY')
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: '_id',
      render: (date) => dayjs(date).format('DD/MM/YYYY')
    },
    {
      title: '',
      dataIndex: 'code',
      key: 'code',
      render: (code) => {
        return <span className='flex gap-4 items-center cursor-pointer'>
            <EditOutlined className='text-lg' onClick={() => showEditModal(code)} /> 
            <Popconfirm
                title="Delete space"
                description="Are you sure to delete this promo?"
                onConfirm={() => handleSpaceDelete(code)}
                okText="Yes"
                cancelText="No"
                okType='danger'
                className='text-red-600 text-lg'
            >
                <DeleteOutlined />
            </Popconfirm>
            </span>
      }
    },
  ];
  return (
        <>
            <div className='bg-white p-5'>
                <div className='w-[80%] p-3 flex gap-4'>
                <Input.Search 
                    placeholder='Search here...'
                    onSearch={(value) => {
                        setSearchText(value)
                    }}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <Button onClick={showAddModal} className='bg-[#4096FF] text-white'>Add New</Button>
                <Button onClick={handleRefresh} className='border-[#4096FF]'>Refresh</Button>
                </div>
                {
                    loading ? (
                        <Skeleton active className='mt-5' />
                      ) : (
                        <Table 
                            bordered 
                            columns={columns} 
                            pagination={{
                                position: ['topRight'],
                            }} 
                            dataSource={promos} 
                        />
                      )
                }
                
            </div>
            <Modal 
                title='Add New Promo' 
                open={isAddModalOpen} 
                onOk={handleAddOk} 
                onCancel={handleAddCancel}
                okType='default'
                okButtonProps={{
                    className: 'bg-[#1677FF] text-white h-fit'
                }}
                confirmLoading={addLoading}
            >
                <Form layout='horizontal' form={addForm}>
                    <Form.Item 
                        label="Code"
                        name="code"
                        rules={[
                            {
                            required: true,
                            message: 'Please enter a code',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        label="Type"
                        name="type"
                        rules={[
                            {
                            required: true,
                            message: 'Please enter a space type',
                            },
                        ]}
                    >
                        <Select>
                            <Select.Option value="space">Space</Select.Option>
                            <Select.Option value="room">Room</Select.Option>
                            <Select.Option value="all">All</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item 
                        label="Discount Percentage"
                        name="discountPercentage"
                        rules={[
                            {
                            required: true,
                            message: 'Please enter a percentage',
                            },
                        ]}
                    >
                        <InputNumber className='w-full' addonAfter="%" />
                    </Form.Item>
                    
                    <Form.Item 
                        label="Expiring Date"
                        name="expiringPromoDate"
                        rules={[
                            {
                             required: true,
                             message: 'Please enter a date',
                            },
                        ]}
                    >
                        <DatePicker allowClear placement='topRight' className='w-full' popupClassName='max-h-[300px] h-auto' />
                    </Form.Item>
                </Form>
            </Modal>
            
            <Modal 
                title='Edit Promo' 
                open={isEditModalOpen} 
                onOk={handleSpaceEdit} 
                onCancel={handleEditCancel}
                okType='default'
                okText='Save'
                confirmLoading={editLoading}
            >
                <Form layout='horizontal' 
                    form={editForm}
                >
                    <Form.Item 
                        label="Discount Percentage"
                        name="discountPercentage"
                        rules={[
                            {
                            required: true,
                            message: 'Please enter a percentage',
                            },
                        ]}
                    >
                        <InputNumber addonAfter="%" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default Promo;