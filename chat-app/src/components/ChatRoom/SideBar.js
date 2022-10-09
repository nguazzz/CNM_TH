import { Col, Row, Tooltip, Button } from "antd";
import { Input, Tabs, tabPosition } from "antd";
import {
  SearchOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import Search from "./Search";
import MessageList from "./MessageList";
import Account from "./Account";

export default function SideBar() {
  return (
    <Row>
      <Row align="left">
        <Col>
          <Account />
        </Col>
      </Row>
      <Col span={24}>
        <Search />
      </Col>
      <Col span={24}>
        <MessageList />
      </Col>
    </Row>
  );
}
