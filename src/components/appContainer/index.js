import React, { Component } from "react";
import { Layout } from "antd";
import AppSider from "./../sider";
import AppHeader from "./../header";

const { Content } = Layout;

class AppContainer extends Component {
  render() {
    return (
      <Layout>
        <AppSider />
        <Layout>
          <AppHeader />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppContainer;
