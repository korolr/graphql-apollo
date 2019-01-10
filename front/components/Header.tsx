import * as React from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const MenuRight = styled.li`
  float: right;
`;

const App = (props: any) => {
  return (
    <div>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item>Главная</Menu.Item>
          <MenuRight>
            <Menu.Item>Корзина</Menu.Item>
          </MenuRight>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  Пользователь
                </span>
              }
            >
              <Menu.Item>Войти</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="book" />
                  Категории
                </span>
              }
            >
              <Menu.Item>Плитка</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </div>
  );
};
export default App;
