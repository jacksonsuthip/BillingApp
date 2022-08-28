import { Col, Row } from "antd";

function AppSubHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          boxShadow: "rgb(213 213 213) 0px 0px 17px 3px",
          zIndex: "1",
          width: "90%",
          padding: "20px",
          borderRadius: "20px",
          margin: "10px 0px"
        }}>
        <Row>
          <Col span={6}>aaaa</Col>
          <Col span={6}>bbbb</Col>
        </Row>
      </div>
    </div>
  );
}

export default AppSubHeader;
