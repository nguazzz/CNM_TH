import { Col, Row, Tooltip, Button } from "antd";
import { Input, Tabs } from "antd";
import {
  SearchOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import Search from "./Search";
import MessageList from "./MessageList";

export default function SideBar() {
  return (
    <Row>
      <Col span={24}>
        <Search />
      </Col>
      <Col span={24}>
        <MessageList />
      </Col>
    </Row>
  );
}
