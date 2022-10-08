import { Avatar, Col, Row } from "antd";
import React from "react";
import { Tooltip, Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";

export default function Account() {
  return (
    //(
    <div style={{ backgroundColor: "#7851A9" }}>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Col style={{ marginBottom: 40, marginTop: 15 }}>
          <Avatar>Hoang Dtr</Avatar>
        </Col>
        <Col>
          <Tooltip title="Text">
            <Button
              style={{ backgroundColor: "#7851A9", borderColor: "#7851A9" }}
              type="primary"
              shape="square"
              icon={<MessageOutlined style={{ color: "#FFFFFF" }} />}
            />
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
}
