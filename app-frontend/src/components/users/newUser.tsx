import { Button, Form, Input, Card, Row, Col, DatePicker, Space, message, Select, Checkbox, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function NewUser() {
    const { Option } = Select;
    // const [uValu, setsuccess] = useState({})
    const [btnClick, setBtnClick] = useState(false)
    const [allUsers, setAllUsers] = useState([])

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
                //             isAdmin : true
            });
            console.log('create: ', create);
            message.success('Registration Success . . .');
            // Router.push("/SignUp-LogIn/login")
        } catch (err) {
            console.log('err: ', err);
            message.error('Faild to Register');
        }
    };

    // function checkUname(val) {
    //     axios.post('http://localhost:7000/api/user/uname', { name: val })
    //         .then((res) => {
    //             if (res.data) {
    //                 setsuccess({ help: "Please try different username", success: "warning" })
    //                 setBtnClick(true)
    //             } else {
    //                 setsuccess({ success: "success" })
    //                 setBtnClick(false)
    //             }
    //         })
    // }
    useEffect(() => {
        axios.get('http://localhost:7000/api/user/get-all')
            .then((res) => {
                let setValue = res.data.map((val: any) => {
                    return {
                        key: val.id,
                        userName: val.name,
                        phno: val.ph_no
                    }
                })
                setAllUsers(setValue)
            })
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Phone No',
            dataIndex: 'phno',
            key: 'phno',
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
                                        rules={[{ required: true, message: 'Province is required' }]}
                                    >
                                        <Select >
                                            <Option value="+1">+1</Option>
                                            <Option value="+91">+91</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name="phno" >
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
                                <DatePicker placeholder="Date" />
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
                            // validateStatus={uValu?.success} hasFeedback
                            // help={uValu?.help}
                            >
                                <Input placeholder="UserName" />
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
                    <Card
                        title="Users List"
                    >
                        <Table dataSource={allUsers} columns={columns} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
