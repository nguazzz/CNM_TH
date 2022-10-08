import { Col, Row, Tooltip, Button } from "antd";
import { Input, Tabs } from "antd";
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
        marginTop: 10,
      }}
    >
      <Col
        span={18}
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
