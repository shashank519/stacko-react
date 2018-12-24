import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import Questions from "./questions";
import UserProfile from "./userProfile";
import AppContainer from "Components/appContainer";

class BaseRoutes extends Component {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Questions} />
          <Route path="/users/:user_id/:display_name" component={UserProfile} />
        </Switch>
      </AppContainer>
    );
  }
}

export default BaseRoutes;
