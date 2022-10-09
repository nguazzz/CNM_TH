import { Avatar, Col, Row, Space, Tabs, Dropdown, Menu, Switch } from "antd";
import React, { useState } from "react";
import { Button } from "antd";
import {
  CheckSquareOutlined,
  CloudOutlined,
  ContactsOutlined,
  MessageOutlined,
  DownOutlined,
  BarsOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";

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
const rootSubmenuKeys = ["sub1"];

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
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
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
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      {/* Tab sidebar */}
      <Col>
        <Row
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            border: 0.5,
            borderColor: "#000000",
            backgroundColor: "#FFFFFF",
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
              <Space style={{ marginBottom: 37, marginLeft: 80 }}>
                Phân loại
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
              width: 256,
            }}
            items={items}
          />
        </Row>

        {/* Tab Contact */}

        <Button icon={<UserAddOutlined />}>Thêm bạn bằng số điện thoại</Button>
      </Col>
    </Row>
  );
}
