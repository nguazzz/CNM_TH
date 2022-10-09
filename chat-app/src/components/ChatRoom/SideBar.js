import { Col, Row } from "antd";

import React from "react";
import Search from "./Search";
import Account from "./Account";

export default function SideBar() {
  return (
    <Row>
      <Col span={24}>
        <Search />
      </Col>
      <Row align="left">
        <Col>
          <Account />
        </Col>
      </Row>
    </Row>
  );
}
