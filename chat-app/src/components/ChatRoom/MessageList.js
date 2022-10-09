import { Col, Row, Tooltip, Button, Dropdown, Menu, Space } from "antd";
import { Input, Tabs, Switch } from "antd";
import {
  SearchOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  DownOutlined,
  SmileOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

//Ham lay gia tri cho menu ba cham
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
//Khai bao items menu ba cham
const items = [
  getItem("", "sub1", <BarsOutlined />, [
    getItem("Đánh dấu đã đọc", "1"),
    getItem("Gửi tin đồng thời", "2"),
    getItem("Trở lại giao diện cơ bản", "3"),
  ]),
];

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

//khai bao item menu Phan loai
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <>
            <p>Chọn nhiều</p>
            <Switch defaultChecked onChange={onChange} />
          </>
        ),
      },
      {
        key: "2",
        label: <p>Khách hàng</p>,
      },
      {
        key: "3",
        label: <p>Gia đình</p>,
      },
      {
        key: "4",
        danger: true,
        label: "Tin nhắn từ người lạ",
      },
    ]}
  />
);

export default function MessageList() {
  // khai bao bien doi mau cho option menubar
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("1");

  // doi mau toi -> sang
  const changeTheme = (values) => {
    setTheme(values ? "dark" : "light");
  };

  const onClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        border: 0.5,
        borderColor: "#000000",
      }}
    >
      <Tabs defaultActiveKey="1" style={{ marginLeft: 10 }}>
        <Tabs.TabPane tab="Tất cả" key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Chưa đọc" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space style={{ marginBottom: 37 }}>
            Phân loại
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      {/* <Menu>
        theme={theme}
        onClick={onClick}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline" items={items}
      </Menu> */}
    </Row>
  );
}
