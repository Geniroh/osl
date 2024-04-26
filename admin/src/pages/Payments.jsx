import React, { useEffect, useState } from 'react';
import { Input, Table, message, Skeleton, Button } from 'antd';
import dayjs from 'dayjs';
import { api } from '../api/api';
import { resources } from '../api/resources';


const Payments = () => {
  const [searchText, setSearchText] = useState('');
  const [payment, setPayments] = useState([]); 
  const [loading, setLoading] = useState(false)

  const fetchData = async() => {
    setLoading(true)
    try {
      const { data } = await api.get(resources.allPaymentUrl);
      setPayments(data)
    } catch (error) {
      message.error("Network error")
    }
    setLoading(false)
  }

  const handleRefresh = () => {
    fetchData()
  }


  useEffect(()=> {
    fetchData()
  }, [])


  const columns = [
    {
      title: "#",
      dataIndex: 'person_id',
      key: '_id',
      render: (__, _, i) => (<span key={i}>{i + 1}</span>)
    },
    {
      title: 'Name',
      dataIndex: 'person_id',
      key: '_id',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record?.person_id?.firstname.toString().toLowerCase().includes(value.toLowerCase()) ||
        record?.person_id?.lastname.toString().toLowerCase().includes(value.toLowerCase()) ||
        record?.person_id?.email.toString().toLowerCase().includes(value.toLowerCase()) ||
        record?.tx_ref.toString().toLowerCase().includes(value.toLowerCase()) ||
        dayjs(record?.createdAt).format('DD/MM/YYYY').toString().toLowerCase().includes(value.toLowerCase())
      }, 
      render: (person) =>  person?.firstname + " " + person?.lastname,
    
    },
    {
      title: 'Email',
      dataIndex: 'person_id',
      render: (person) =>  person?.email,
      key: '_id',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: '_id',
      sorter: (a, b) => a.amount - b.amount,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Transaction Reference',
        dataIndex: 'tx_ref',
        key: '_id',
    },
    {
        title: 'Transaction ID',
        dataIndex: 'transaction_id',
        key: '_id',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: '_id',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: '_id',
      render: (date) => dayjs(date).format('DD/MM/YYYY')
    },
  ];
  return (
        <div className='bg-white p-5'>
            <div className='w-[80%] p-3 flex items-center gap-4'>
             <Input.Search 
                placeholder='Search here...'
                onSearch={(value) => {
                    setSearchText(value)
                }}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
            />
            <Button onClick={handleRefresh} className='border-[#4096FF]'>Refresh</Button>
            </div>
            {
              loading ? (
                <Skeleton active className='mt-5' />
              ) : 
              (
                <Table 
                  bordered 
                  columns={columns} 
                  dataSource={payment}
                  pagination={{
                    position: ['topRight'],
                  }}  
                />
              )
            }
        </div>
    );
};
export default Payments;