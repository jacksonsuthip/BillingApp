import { Col, Row, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import logo from '../../logo.svg';
import DashboardMenu from "../dashboard/dashboardMenu";
import { useState } from "react";
import AppHome from "../dashboard/apphome";

function DashboardHeader() {

    const [menuKey, setMenuKey] = useState("")

    const menuClick = (val: any) => {
        setMenuKey(val.key)
    }
    console.log(menuKey)
    return (
        <>
            <div
                style={{
                    boxShadow: "rgb(213 213 213) 0px 0px 17px 3px",
                    zIndex: "1",
                    width: "100%",
                    padding: "10px",
                    position: "fixed",
                    backgroundColor: "#fff",
                }}>
                <Row>
                    <Col span={8} style={{ display: "flex", alignItems: "flex-end" }}>
                        <img src={logo} style={{ height: "40px" }} alt="logo" />
                        <h3>ReactApp</h3>
                    </Col>
                    <Col span={8}>
                        <DashboardMenu
                            menuClick={menuClick}
                        />
                    </Col>
                    <Col span={8} style={{ display: "flex", justifyContent: "right", padding: "0px 20px", margin: "auto" }}>
                        <Avatar style={{ backgroundColor: 'rgb(43 23 249)' }} icon={<UserOutlined />} />
                    </Col>
                </Row>
            </div>
            {menuKey === "1" &&
                <AppHome />
            }
        </>
    );
}

export default DashboardHeader;
