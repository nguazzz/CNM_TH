import { Col, Row, Tooltip, Button, Dropdown, Menu, Space } from "antd";
import { Input, Tabs } from "antd";
import {
  SearchOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import React from "react";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Chọn nhiều
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: false,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);
export default function MessageList() {
  return (
    <Row>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Tất cả" key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Chưa đọc" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Row>
  );
}
