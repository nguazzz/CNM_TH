import { Avatar, Col, Row, Space, Tabs, Dropdown, Menu, Switch } from "antd";
import React, { useState } from "react";
import { Button } from "antd";
import {
  CheckSquareOutlined,
  CloudOutlined,
  ContactsOutlined,
  MessageOutlined,
  DownOutlined,
  BarsOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function Account() {
  return (
    <Row
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#0068FF",
      }}
    >
      {/* Avatar */}
      <Col span={24}>
        <Avatar style={{ alignItems: "center", marginLeft: 15 }}>
          Hoang Dtr
        </Avatar>
      </Col>
      <Col span={24}>
        <Button
          type="primary"
          icon={<MessageOutlined />}
          style={{ fontSize: "180%" }}
        />
      </Col>
    </Row>
  );
}
