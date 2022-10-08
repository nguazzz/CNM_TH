import React from "react";
import { Row, Col, Button, Typography } from "antd";

const { Title } = Typography;
export default function Login() {
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} Level={3}>
            Toác Tơ
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng google
          </Button>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
