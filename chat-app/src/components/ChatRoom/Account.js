import { Avatar, Col, Row } from "antd";
import React from "react";
import { Tooltip, Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";

export default function Account() {
  return (
    //(
    <Row
      style={{
        backgroundColor: "#7851A9",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Col style={{ marginBottom: 40, marginTop: 20 }}>
        <Avatar>Hoang Dtr</Avatar>
      </Col>
      <Col>
        <Tooltip title="Text">
          <Button
            type="primary"
            shape="circle"
            icon={
              <MessageOutlined
                style={{ color: "#FFFFFF", backgroundColor: "#7851A9" }}
              />
            }
          />
        </Tooltip>
      </Col>
    </Row>
  );
}
