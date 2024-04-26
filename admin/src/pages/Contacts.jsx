import React, { useEffect, useState } from 'react';
import { Input, Table, Skeleton, message, Modal, Button, Divider, List, Typography } from 'antd';
import dayjs from 'dayjs';
import EmailLink from '../components/EmailLink';
import { api } from '../api/api';
import { resources } from '../api/resources';

const Contacts = () => {
  const [searchText, setSearchText] = useState('');
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [contactMessages, setContactMessages] = useState([]);
  const [msgModal, setMsgModal] = useState(false)

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(resources.contactUrl);
      setContacts(data);
    } catch {
      message.error("Network Error!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  const showMessages = (msg) => {
    setContactMessages(msg)
    setMsgModal(true)
  }

  const columns = [
    {
      title: "#",
      dataIndex: '_id',
      key: '_id',
      render: (__, _, i) => i + 1
    },
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      key: '_id',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record?.fullname.toString().toLowerCase().includes(value.toLowerCase()) ||
        record?.email.toString().toLowerCase().includes(value.toLowerCase())
      }, 
    
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '_id',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phonenumber',
      key: '_id',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: '_id',
    },
    {
      title: 'Messages',
      dataIndex: 'message',
      key: '_id',
      render: (messages) => {
        return <Button onClick={() => showMessages(messages)}>Show Messages</Button>
      }
    },
    // {
    //   title: 'Messages',
    //   dataIndex: 'message',
    //   key: '_id',
    //   //Message component
    //   render: (msgs) => {
    //     console.log({msgs})
    //     return msgs?.map((msg,i) => <><p key={i} className='text-xs'>{msg}</p> <br></br></>)
    //   }
    // },
    {
      title: 'Date',
      dataIndex: 'updatedAt',
      key: '_id',
      render: (date) => dayjs(date).format('DD/MM/YYYY')
    },
    {
      title: '',
      dataIndex: 'email',
      key: '_id',
      render: (email) => <EmailLink email={email} />
    },
  ];
  return (
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
            <Button onClick={handleRefresh} className='border-[#4096FF]'>Refresh</Button>
            </div>
            {
                loading ? (
                    <Skeleton active className='mt-5' />
                  ) : (
                    <Table 
                      tableLayout='auto' 
                      bordered 
                      columns={columns} 
                      dataSource={contacts}
                      pagination={{
                        position: ['topRight'],
                      }}  
                    />
                  )
              }

        <Modal
            title="Messages"
            open={msgModal} 
            onOk={() => setMsgModal(!msgModal)} 
            onCancel={() => setMsgModal(!msgModal)}
            okType='default'
        >
            {contactMessages.map((msg, index) => (
                <p key={index} className='py-2 px-3 border'>{msg || "--"}</p>
            ))}
        </Modal>
           
        </div>
    );
};
export default Contacts;
