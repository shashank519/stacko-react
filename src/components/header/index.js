import React from "react";
import { withRouter } from "react-router-dom";

import { Layout, Icon } from "antd";
const { Header, Sider, Content } = Layout;

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.toggle}
        />
      </Header>
    );
  }
}

export default withRouter(AppHeader);
