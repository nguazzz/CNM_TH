import { Col, Row } from "antd";

import React from "react";
import Search from "./Search";
import Account from "./Account";

export default function SideBar() {
  return (
    <Row>
      <Col span={24} style={{ marginBottom: 15 }}>
        <Search />
      </Col>
      <Col span={24}>
        <Account />
      </Col>
    </Row>
  );
}
