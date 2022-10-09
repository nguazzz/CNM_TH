import { Col, Row, Tooltip, Button } from "antd";
import { Input, Tabs, Avatar } from "antd";
import {
  SearchOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";

export default function Search() {
  return (
    <Row
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0068FF",
        padding: 10,
      }}
    >
      {/* Avatar */}
      <Col style={{}} span={3}>
        <Avatar style={{ alignItems: "center", marginLeft: 15 }}>
          Hoang Dtr
        </Avatar>
      </Col>
      <Col
        span={15}
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: 5,
        }}
      >
        <Input
          size="large"
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined />}
        />
      </Col>
      <Col
        span={1.5}
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: 0,
        }}
      >
        <Tooltip title="Thêm bạn">
          <Button
            style={{ backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" }}
            type="primary"
            shape="square"
            icon={<UserAddOutlined style={{ color: "#000000" }} />}
          />
        </Tooltip>
      </Col>
      <Col span={1.5} style={{ marginRight: 5 }}>
        <Tooltip title="Tạo nhóm chat">
          <Button
            style={{ backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" }}
            type="primary"
            shape="square"
            icon={<UsergroupAddOutlined style={{ color: "#000000" }} />}
          />
        </Tooltip>
      </Col>
    </Row>
  );
}
