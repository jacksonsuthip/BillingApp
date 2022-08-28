import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Row, Col, Card, Form, Input, Button, PageHeader } from 'antd';
import loginSVG from '../svg/loginSVG.svg'

function Login() {

  const [form] = Form.useForm();

  const onFinish = (val: any) => {
    console.log(val)
  }
  return (
    <div>
      <PageHeader
        ghost={false}
        title="Welcom to Development"
        subTitle=""
        style={{ boxShadow: "0px 6px 6px 1px #dfe6e9", zIndex:"1", width: "100%" }}
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
              // validateStatus={uValu?.success} hasFeedback
              // help={uValu?.help}
              >
                <Input prefix={<UserOutlined />}
                  placeholder="Username"
                // onBlur={e => checkUname(e.target.value)}
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
              // validateStatus={warning} hasFeedback
              >
                <Input prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" >
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
