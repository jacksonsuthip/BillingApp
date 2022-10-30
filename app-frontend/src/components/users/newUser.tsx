import { Button, Form, Input, Card, Row, Col, DatePicker, Space, message, Select, Checkbox, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function NewUser() {
    const [form] = Form.useForm();
    const { Option } = Select;
    const [uValu, setsuccess] = useState<{ help: string, success: any }>({
        help: "",
        success: ""
    })
    const [btnClick, setBtnClick] = useState(false)
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const onFinish = async (values: any) => {
        try {
            console.log(parseInt(values.phno))
            const create = await axios.post('http://localhost:7000/api/user/create', {
                name: values.firstName,
                secondName: values.secondName,
                phNo: parseInt(values.phno),
                countryCode: values.code,
                email: values.email,
                userName: values.userName,
                password: values.password,
                userExpiryDate: values.date.format('YYYY-MM-DD'),
                // isAdmin : true
            });
            message.success('Registration Success . . .');
            getUsers()
            form.resetFields()
        } catch (err) {
            console.log('err: ', err);
            message.error('Faild to Register');
        }
    };

    const getUsers = async () => {
        await axios.get('http://localhost:7000/api/user/get-all')
            .then((res) => {
                let setValue = res.data.map((val: any, i: number) => {
                    return {
                        key: val.id,
                        userName: val.name,
                        phno: val.ph_no,
                        slno: i + 1,
                    }
                })
                setAllUsers(setValue)
            })
    }
    const checkUname = async (uNameValue: string) => {
        await axios.get('http://localhost:7000/api/user/uname',
            {
                params:
                    { uname: uNameValue }
            })
            .then((res) => {
                if (res.data.length) {
                    setsuccess({
                        help: "Please try different username",
                        success: "warning"
                    })
                    setBtnClick(true)
                } else {
                    setsuccess({
                        help: '',
                        success: "success"
                    })
                    setBtnClick(false)
                }
            })
    }

    const columns = [
        {
            title: 'Sl.No',
            dataIndex: 'slno',
            key: 'slno',
            width: '15%'
        },
        {
            title: 'Name',
            dataIndex: 'userName',
            key: 'userName',
            width: '40%'
        },
        {
            title: 'Phone No',
            dataIndex: 'phno',
            key: 'phno',
            width: '45%'
        }
    ];
    return (
        <div>
            <Row
                style={{
                    padding: "90px 0px 0px 0px",
                }}
            >
                <Col span={1}></Col>
                <Col span={10}>
                    <Card
                        title="Add User"
                    >
                        <Form
                            form={form}
                            name="normal_login"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 15 }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item label="Name" style={{ marginBottom: "0px" }}>
                                <Input.Group compact style={{ display: "flex" }}>
                                    <Form.Item
                                        name="firstName"
                                        style={{ marginBottom: "0px" }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Name!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item name="secondName" >
                                        <Input placeholder="Second Name" />
                                    </Form.Item>
                                </Input.Group>
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                label="Ph. No"
                                style={{ marginBottom: "0px" }}
                            >
                                <Input.Group compact >
                                    <Form.Item
                                        name="code"
                                        noStyle
                                    >
                                        <Select style={{ width: '20%' }} defaultValue="+91">
                                            <Option value="+1">+1</Option>
                                            <Option value="+91">+91</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name="phno" style={{ width: '80%' }} >
                                        <Input placeholder="Phone No" />
                                    </Form.Item>
                                </Input.Group>
                            </Form.Item>
                            <Form.Item label="Expiry Date" name="date"
                                rules={[{
                                    required: true,
                                    message: 'Please input Date!',
                                }]}
                            >
                                <DatePicker style={{ width: '100%' }} placeholder="Date" />
                            </Form.Item>
                            <Form.Item
                                label="UserName"
                                name="userName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your UserName!',
                                    },
                                ]}
                                validateStatus={uValu?.success} hasFeedback
                                help={uValu?.help}
                            >
                                <Input onBlur={e => checkUname(e.target.value)} placeholder="UserName" />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>
                            {/* <Form.Item name="admin" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Admin</Checkbox>
                            </Form.Item> */}
                            <Form.Item
                                wrapperCol={{ offset: 9 }}
                            >
                                <Space>
                                    <Button type="primary" htmlType="submit" disabled={btnClick}>
                                        Submit
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={1}></Col>
                <Col span={11}>
                    <Card title="Users List" >
                        <Table pagination={{ pageSize: 5 }} dataSource={allUsers} columns={columns} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
