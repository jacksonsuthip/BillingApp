import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Row, Col, Card, Form, Input, Button, PageHeader, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import loginSVG from '../svg/loginSVG.svg'

function Login() {

  const [form] = Form.useForm();
  const [uValu, setsuccess] = useState<{ help: string, success: any }>({ help: "", success: "" })
  const [warning, setWarning] = useState<any>()

  const checkUname = async (uNameValue: string) => {
    await axios.get('http://localhost:7000/api/user/uname',
      {
        params:
          { uname: uNameValue }
      })
      .then((res) => {
        if (!res.data.length) {
          setsuccess({
            help: "Can't find this Username",
            success: "warning"
          })
        } else {
          setsuccess({
            help: '',
            success: "success"
          })
        }
      })
  }
  const onFinish = async (values: any) => {
    try {
      const login = await axios.get('http://localhost:7000/api/user/login',
        {
          params: {
            uname: values.username,
            password: values.password
          }
        });
      if (login.data.length === 1) {
        localStorage.setItem("uId", JSON.stringify(login.data))
        // await axios.post('http://localhost:7000/api/user/login/save', {
        //   id: login.data[0]._id,
        //   name: login.data[0].uName,
        //   // ip: ip
        // })
        message.success('Login Success . . .');
        setWarning('success')
        // Router.push("/dashboard/profileDetails")
      } else {
        message.warning('Username or Password is incorrect !');
        setWarning('warning')
        form.setFieldsValue({ password: '' })
      }
    } catch (err) {
      console.log('err: ', err);
      message.error('Faild to login');
    }
  };

  return (
    <div>
      <PageHeader
        ghost={false}
        title="Welcom to Development"
        subTitle=""
        style={{ boxShadow: "0px 6px 6px 1px #dfe6e9", zIndex: "1", width: "100%" }}
      // extra={[]}
      >
      </PageHeader>
      <Row>
        <Col span={4}></Col>
        <Col span={7}>
          <img src={loginSVG} style={{ margin: "18% 0%" }} alt="loginSVG" />
        </Col>
        <Col span={1}></Col>
        <Col span={7}>
          <Card
            title="Login"
            style={{ margin: "25% 0%", }}
          >
            <Form
              name="normal_login"
              onFinish={onFinish}
              autoComplete="off"
              form={form}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
                validateStatus={uValu?.success} hasFeedback
                help={uValu?.help}
              >
                <Input prefix={<UserOutlined />}
                  placeholder="Username"
                  onBlur={e => checkUname(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
                validateStatus={warning} hasFeedback
              >
                <Input prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
                &nbsp;&nbsp;Or&nbsp;&nbsp;
                {/* <Link href="/SignUp-LogIn/signup">Create New!</Link> */}
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
}

export default Login;
