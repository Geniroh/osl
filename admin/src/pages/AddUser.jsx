import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { api } from '../api/api';
import { resources } from '../api/resources';

const AddUser = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);


    // const handleAddUser = () => {

    // }

    const onFinishFailed = () => {
        message.error("Please fill in all fields")
    }

    const onFinish = async (values) => {
        setLoading(true)
        try {
          const { data } = await api.post(resources.registerUrl, values)
  
          if(data) message.success("User created successfully")
          form.resetFields()
        } catch (error) {
          message.error("There was an error adding user, please try again!")
        }
        setLoading(false)
      };

  return (
        <div className='w-full bg-white p-5'>
            <Form 
                layout='horizontal' 
                title='Add User Form'
                form={form} 
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
                className='max-w-[700px] my-10 border-[5px] border-[#F5F5F5] bg-[#F5F5F5] mx-auto border-[#001529]-500 p-4 rounded-lg'
            >
            <h2 className='text-center font-bold text-2xl mb-2'>Add User Form</h2>
            <Form.Item 
                 label={<span className='min-w-[90px] text-left'>Username</span>}
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please enter a username',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                 label={<span className='min-w-[90px] text-left'>Email</span>}
                name="email"
                rules={[
                    {
                    required: true,
                    message: 'Please enter an email',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                label={<span className='min-w-[90px] text-left'>Role</span>}
                name="role"
                rules={[
                    {
                    required: true,
                    message: 'Please enter a space type',
                    },
                ]}
            >
                <Select>
                    <Select.Option value="super_admin">Super Admin</Select.Option>
                    <Select.Option value="admin">Admin</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item 
                 label={<span className='min-w-[90px] text-left'>Phone Number</span>}
                name="phonenumber"
                rules={[
                    {
                    required: true,
                    message: 'Please enter a phone number',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                label={<span className='min-w-[90px] text-left'>Password</span>}
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please enter a password',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Button htmlType="submit" className='bg-[#FFA903] h-[40px] uppercase text-white' loading={loading} block>
                Add
            </Button>
            </Form>
        </div>
  )
}

export default AddUser