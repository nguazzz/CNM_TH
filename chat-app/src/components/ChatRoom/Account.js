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
export default function Account() {
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
      }}
    >
      {/* Tab sidebar */}
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
            <div>
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
                    <Space style={{ marginBottom: 37, marginLeft: 80 }}>
                      Phân loại
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Row>
            </div>
          </Tabs.TabPane>

          {/* Tab Contact */}
          <Tabs.TabPane
            tab={
              <span>
                <ContactsOutlined style={{ fontSize: "20px" }} />
              </span>
            }
            key="tab2"
          >
            <div>
              <Button icon={<UserAddOutlined />}>
                Thêm bạn bằng số điện thoại
              </Button>
            </div>
          </Tabs.TabPane>

          {/* Tab To-do */}
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

          {/* Tab Cloud */}
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
          {/* <Tabs.TabPane
            tab={
              <span>
                <SettingOutlined style={{ fontSize: "20px" }} />
              </span>
            }
          >
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ marginBottom: 37, marginLeft: 80 }}>
                  <SettingOutlined />
                </Space>
              </a>
            </Dropdown>
          </Tabs.TabPane> */}
        </Tabs>
      </Col>
    </Row>
  );
}
