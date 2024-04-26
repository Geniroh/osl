import React, { useState, useEffect } from 'react';
import {
  PieChartOutlined,
  FundProjectionScreenOutlined,
  TeamOutlined,
  CalendarOutlined,
  UserOutlined,
  SettingOutlined,
  MailOutlined
} from '@ant-design/icons';
import favicon from '../assets/favicon.png';
import { Layout, Menu, Avatar, Button, Modal, Form, Input, message, Popconfirm } from 'antd';
import Overview from '../components/Overview';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { api } from '../api/api';
import { resources } from '../api/resources';
import { validatePhoneNumber } from '../utils/function';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Admin = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const { logout, user } = useAuth();
  const avatarName = user?.username[0] + user?.username[1] || 'I'
  const [editForm] = Form.useForm();

  const items = [
    getItem(<Link key="1" to='/payments' >Payments</Link>, '1', <PieChartOutlined />),
    getItem(<Link key="2" to='/reservations' >Reservations</Link>, '2', <CalendarOutlined />),
    getItem(<Link key="3" to='/spaces' >Spaces</Link>, '3', <TeamOutlined />),
    getItem(<Link key="4" to='/promo' >Promos</Link>, '4', <FundProjectionScreenOutlined />),
    getItem(<Link key="5" to='/contacts' >Contacts</Link>, '5', <MailOutlined />),
    user?.role === 'super_admin' ? 
    getItem(<Link key="6" to='/user' >Users</Link>, '6', <UserOutlined />) : " ",
  ];
  
  const handleLogout = () => {
    setLoading(true)
    try {
      logout()
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleEditCancel = async () => {
    await editForm.resetFields()
    setEditModalOpen(false);
  }

  const handleSpaceEdit = async () => {
    try {
        setEditLoading(true)
        const values = await editForm.validateFields()
        const id = user?._id

        if(!values.password) delete values.password
        const { data } = await api.patch(resources.peopleUrl+ `/${id}`, values)

        if(data) {
          setEditModalOpen(false)
          message.success('User details updated successfully')
        }
    } catch (error) {
      message.error("There was an error updating user details")
    }
    setEditLoading(false)
  }

  const showEditModal = async () => {
    try {
      setEditModalOpen(true);
      // editForm.setFieldsValue({ username: auth?.user?.username })
    } catch (error) {
      message.error("There was an error performing operation!")
    }
  }

  return (
    <Layout className='h-screen'>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className='fixed h-screen top-0 bottom-0' >
        <div className='w-full p-3 flex justify-center items-center gap-2 transition-all duration-500'>
          <img src={favicon} alt="" />
          {
            !collapsed && <h1 className='text-white font-semibold text-[20px]'>Orchidsprings</h1>
          }
          
        </div>
        <Menu theme="dark"  mode="inline" items={items} />
      </Sider>
      <Layout>
      <Header 
        className='px-10 bg-white flex justify-between items-center'
      > 
        <div className='text-xl'>
          OSL Spaces
        </div>
        <div className='flex gap-3 items-center'>
          <Avatar style={{ verticalAlign: 'middle' }} className='bg-[#EC0000]' size="large" gap={2}>
            {avatarName}
          </Avatar>
          <Popconfirm
            title="OSL Spaces"
            description="Are you sure you want to logout?"
            onConfirm={handleLogout}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              loading: loading
            }}
          >
            <Button>Logout</Button>
          </Popconfirm>
          
          <SettingOutlined onClick={() => showEditModal()} />
        </div>
      </Header>
        <Content
          style={{
            margin: '0 16px',
            marginTop: '16px',
            height: '80vh',
            overflowY: 'auto',
            overflowX: 'auto',
          }}
        >
          <Overview />
          <Outlet />
        </Content>
        <Footer
          className='text-center'
        >
          Orchid Springs ©2023 All rights reserved
        </Footer>
      </Layout>

      <Modal 
          title='Edit Details' 
          open={isEditModalOpen} 
          onOk={handleSpaceEdit} 
          onCancel={handleEditCancel}
          okType='default'
          okText='Save'
          confirmLoading={editLoading}
      >
        <Form 
          layout='vertical' 
          form={editForm}
          initialValues={{
            email: user?.email,
            phonenumber: user?.phonenumber,
            username: user?.username,
          }}
        >
          <Form.Item 
            label="Email"
            name="email"
          >
            <Input readOnly onClick={() => message.info("You cannot edit his field!")} />
          </Form.Item>

          <Form.Item 
            label="Phone Number"
            name="phonenumber"
            rules={[
              {
                validator: validatePhoneNumber
              }
            ]}
          >
            <Input />
          </Form.Item>


          <Form.Item 
            label="Username"
            name="username"
            rules={[
              {
                message: 'Please enter a username',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item 
            label="Password"
            name="password"
            rules={[
              {
                message: 'Please enter a new password',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};
export default Admin;
