import React, { useEffect, useState } from 'react';
import { Input, Table, message, Skeleton, Button } from 'antd';
import dayjs from 'dayjs';
import { api } from '../api/api';
import { resources } from '../api/resources';


const Reservations = () => {
  const [searchText, setSearchText] = useState('');
  const [reservations, setReservations] = useState([]); 
  const [loading, setLoading] = useState(false)

  const fetchData = async() => {
    setLoading(true)
    try {
      const { data } = await api.get(resources.allReservation);
      setReservations(data)
    } catch (error) {
      console.log(error)
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
      render: (__, _, i) => i + 1
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: '_id',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record?.name.toString().toLowerCase().includes(value.toLowerCase()) ||
        record?.email.toString().toLowerCase().includes(value.toLowerCase()) ||
        dayjs(record?.createdAt).format('DD/MM/YYYY').toString().toLowerCase().includes(value.toLowerCase())
      }, 
    
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '_id',
    },
    {
      title: 'Seat Number',
      dataIndex: 'seat_number',
      key: '_id',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: '_id',
    },
    {
      title: 'Reserved Dates',
      dataIndex: 'dates',
      key: '_id',
      render: (dates) => dates?.map((date,i) => <><p key={i} className='font-bold'>{dayjs(date).format('DD/MM/YYYY')}</p></>)
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: '_id',
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: '_id',
    },
    {
        title: 'Promo Code',
        dataIndex: 'promoCode',
        key: '_id',
    },
    {
        title: 'Discount %',
        dataIndex: 'discountPercentage',
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
              ) : (
                <Table 
                  tableLayout='auto' 
                  bordered 
                  columns={columns} 
                  dataSource={reservations}
                  pagination={{
                    position: ['topRight'],
                  }}  
                />
              )
            }
        </div>
    );
};
export default Reservations;