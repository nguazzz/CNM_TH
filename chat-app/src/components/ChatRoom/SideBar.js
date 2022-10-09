import { Col, Row } from "antd";

import React from "react";
import Search from "./Search";
import Account from "./Account";
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
