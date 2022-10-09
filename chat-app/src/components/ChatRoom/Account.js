import { Avatar, Col, Row, Radio, Space, Tabs } from "antd";
import React, { useState } from "react";
import { Tooltip, Button } from "antd";
import {
  CheckSquareOutlined,
  CloudOutlined,
  ContactsOutlined,
  MessageOutlined,
  ToolOutlined,
  WalletOutlined,
} from "@ant-design/icons";

export default function Account() {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Col style={{ marginBottom: 40, marginTop: 15 }}>
        <Avatar>Hoang Dtr</Avatar>
      </Col>
      <Col>
        <Tabs defaultActiveKey="tab1" tabPosition="left">
          <Tabs.TabPane
            tab={
              <span>
                <MessageOutlined style={{ fontSize: "20px" }} />
              </span>
            }
            key="tab1"
          >
            <div>This is content of Message</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <ContactsOutlined style={{ fontSize: "20px" }} />
              </span>
            }
            key="tab2"
          >
            <div>This is content of ContactsOutlined</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <CheckSquareOutlined style={{ fontSize: "20px" }} />
              </span>
            }
            key="tab3"
          >
            <div>This is content of To-do</div>
          </Tabs.TabPane>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Tabs.TabPane
            tab={
              <span>
                <CloudOutlined style={{ fontSize: "20px" }} />
              </span>
            }
            key="tab4"
          >
            <div>This is content of Cloud</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <ToolOutlined style={{ fontSize: "20px" }} />
              </span>
            }
            key="tab4"
          >
            <div>This is content of Tools</div>
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}
