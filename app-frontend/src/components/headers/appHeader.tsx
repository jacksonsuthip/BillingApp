import { Col, Row, Menu, Avatar } from "antd";
import { HomeOutlined, FileTextOutlined, BarsOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../../logo.svg';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <>
      <div
        style={{
          boxShadow: "rgb(213 213 213) 0px 0px 17px 3px",
          zIndex: "1",
          width: "100%",
          padding: "10px",
          position: "fixed",
          // borderRadius: "0px 0px 20px 20px",
          backgroundColor: "#fff",
        }}>
        <Row>
          <Col span={8} style={{ display: "flex", alignItems: "flex-end" }}>
            <img src={logo} style={{ height: "40px" }} alt="logo" />
            <h3>ReactApp</h3>
          </Col>
          <Col span={8}>
            <Menu mode="horizontal" defaultSelectedKeys={['1']}
              style={{
                borderBottom: "none",
                justifyContent: "center"
              }}>
              <Menu.Item key="1" icon={<HomeOutlined />} >
                <Link to={"/app/home"}>Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<BarsOutlined />}>
                Billing
              </Menu.Item>
              <Menu.Item key="3" icon={<FileTextOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to={"/app/users"}>Users</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={8} style={{ display: "flex", justifyContent: "right", padding: "0px 20px", margin: "auto" }}>
            <Avatar style={{ backgroundColor: 'rgb(43 23 249)' }} icon={<UserOutlined />} />
          </Col>
        </Row>
      </div>
      <Outlet />
    </>
  );
}

export default AppHeader;
