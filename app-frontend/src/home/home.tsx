import AppHeader from '../components/headers/appHeader';
import { Col, Row, Card } from "antd";
import LineChart from '../components/Chart/lineChart';
import DonutChart from '../components/Chart/donutChart';
import ListCustomer from '../components/listCustomer';
import ColumnChart from '../components/Chart/columnChart';

function AppHome() {
  return (
    <div >
      {/* <AppHeader /> */}
      <Row><Col span={24} style={{ margin: "40px 0px" }}></Col></Row>
      <Row>
        {/* <Col span={1}></Col> */}
        <Col span={13} style={{ margin: "0px 0px 0px 20px" }}>
          <Card style={{ width: "100%", padding: "0px 17px" }} >
            <div style={{ fontSize: "15px", color: "GrayText", padding: "0px 0px 10px 0px", margin: "-10px 0px 0px 0px", textAlign: "center" }}>
              <b>Seven Days</b>
            </div>
            <LineChart />
          </Card>
        </Col>
        {/* <Col span={1}></Col> */}
        <Col span={10} style={{ margin: "0px 0px 0px 20px" }}>
          <Card style={{ width: "100%" }}>
            <div style={{ fontSize: "15px", color: "GrayText", padding: "0px 0px 10px 0px", margin: "-10px 0px 0px 0px", textAlign: "center" }}>
              <b>Seven Days</b>
            </div>
            <DonutChart />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={8} style={{ margin: "7px 0px 0px 20px" }}>
          <Card>
            <div style={{ fontSize: "15px", color: "GrayText", padding: "0px 0px 10px 0px", margin: "-10px 0px 0px 0px", textAlign: "center" }}>
              <b>Recent Customers</b>
            </div>
            <ListCustomer />
          </Card>
        </Col>
        <Col span={8} style={{ margin: "7px 0px 0px 20px" }}>
          <Card>
            <ColumnChart />
          </Card>
        </Col>
        <Col span={7}>
          <Row>
            <Col span={2}></Col>
            <Col span={10} style={{ margin: "30px 0px 0px 0px" }}>
              <div style={{
                borderRadius: "10px",
                border: "1px solid #f0f0f0",
                padding: "10px 20px",
                backgroundColor: "rgb(187 104 225)"
              }}>
                <h3 style={{
                  fontWeight: "bolder",
                  fontSize: "22px",
                  textAlign: "center",
                  color: "white"
                }}>Total</h3>
                <div>55</div>
              </div>
            </Col>
            <Col span={10} style={{ margin: "30px 0px 0px 10px" }}>
              <div style={{
                borderRadius: "10px",
                border: "1px solid #f0f0f0",
                padding: "10px 20px",
                backgroundColor: "#23ff25"
              }}>
                <h3 style={{
                  fontWeight: "bolder",
                  fontSize: "22px",
                  textAlign: "center"
                }}>Profit</h3>
                <div>55</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>dffgsdgasfssd</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AppHome;
