import React from "react";
import { Layout } from "antd";

import "./Footer.scss";

const { Footer } = Layout;

class FooterPrelogin extends React.Component {
  render() {
    return (
      <Footer className="pl-footer">Ant Design ©2018 Created by Ant UED</Footer>
    );
  }
}

export default FooterPrelogin;
