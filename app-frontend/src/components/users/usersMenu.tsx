import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function UsersMenu(props: any) {

    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={[]}
                style={{
                    borderBottom: "none",
                    justifyContent: "center"
                }} onClick={(e) => props.menuClick(e)}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Users
                </Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />} >
                    <Link to={"/home"}>Home</Link>
                </Menu.Item>
            </Menu>
        </>
    );
}

export default UsersMenu;