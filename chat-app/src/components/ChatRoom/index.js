import React from "react";
import { Row, Col } from "antd";
import SideBar from "./SideBar";
import ChatWindow from "./ChatWindow";
import Account from "./Account";

export default function ChatRoom() {
  return (
    <div>
      <Row span={2}>
        <Col>
          <Account />
        </Col>
        <Col span={7}>
          <SideBar />
        </Col>
        <Col span={14}>
          <ChatWindow />
        </Col>
      </Row>
      {/* // This is ChatRoom */}
    </div>
  );
}
