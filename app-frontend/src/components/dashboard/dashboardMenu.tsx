import { FileTextOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function DashboardMenu(props: any) {

    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={[]}
                style={{
                    borderBottom: "none",
                    justifyContent: "center"
                }} onClick={(e) => props.menuClick(e)}>
                <Menu.Item key="1" icon={<FileTextOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />} >
                    <Link to={"/home"}>Home</Link>
                </Menu.Item>
            </Menu>
        </>
    );
}

export default DashboardMenu;