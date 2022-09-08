import { Col, Row } from "antd";
import HomeHeader from "../components/headers/homeHeader";
import billing from '../svg/homeMenuSVG/billing.svg'
import dashBoard from '../svg/homeMenuSVG/dashBoard.svg'
import reports from '../svg/homeMenuSVG/reports.svg'
import userAdd from '../svg/homeMenuSVG/usersAdd.svg'
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivSetStyle = styled.div`
background: white;
width: 27%;
border-radius: 10px;
border: 1px solid rgb(227, 227, 227);
font-weight: bold;
font-size: medium;
text-align: center;

.img {
    width: 70%;
}

&:hover {
    box-shadow: rgb(99 105 255) 0px 0px 7px 0px;
  }
.link:hover{
    color: #1890ff !important
}
.svgss{
    fill: red !important;
}
`

export default function HomeMenu() {
    return (
        <>
            <HomeHeader />
            <div style={{ padding: "130px 0px" }}>
                <Row>
                    <Col span={11} style={{ display: "flex", justifyContent: "right" }}>
                        <DivSetStyle>
                            <Link to={'/app/dashboard'} style={{ color: "#505050" }} className="link">
                                <div>
                                    <img src={dashBoard} className="img" alt="dashBoard" />
                                </div>
                                <div style={{ padding: "0px 0px 10px 0px" }}>DashBoard</div>
                            </Link>
                        </DivSetStyle>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11} style={{ display: "flex", justifyContent: "left" }}>
                        <DivSetStyle>
                            <Link to={'/app/home'} style={{ color: "#505050" }} className="link">
                                <div>
                                    <img src={billing} style={{ width: "70%" }} alt="billing" />
                                </div>
                                <div style={{ padding: "0px 0px 10px 0px" }}>Billing</div>
                            </Link>
                        </DivSetStyle>
                    </Col>
                </Row>
                <Row style={{ margin: "50px 0px 0px 0px" }}>
                    <Col span={11} style={{ display: "flex", justifyContent: "right" }}>
                        <DivSetStyle>
                            <Link to={'/app/home'} style={{ color: "#505050" }} className="link">
                                <div>
                                    <img src={reports} style={{ width: "70%" }} alt="reports" />
                                </div>
                                <div style={{ padding: "0px 0px 10px 0px" }}>Reports</div>
                            </Link>
                        </DivSetStyle>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11} style={{ display: "flex", justifyContent: "left" }}>
                        <DivSetStyle>
                            <Link to={'/app/users'} style={{ color: "#505050" }} className="link">
                                <div>
                                    <img src={userAdd} style={{ width: "70%" }} alt="userAdd" />
                                </div>
                                <div style={{ padding: "0px 0px 10px 0px" }}>User Details</div>
                            </Link>
                        </DivSetStyle>
                    </Col>
                </Row>
            </div>

        </>
    );
}
