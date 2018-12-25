import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

// import Questions from "./questions";
// import UserProfile from "./userProfile";
import AppContainer from "Components/appContainer";

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LoadableQuestions = Loadable({
  loader: () => import("./questions"),
  loading: MyLoadingComponent
});

const LoadableUsers = Loadable({
  loader: () => import("./userProfile"),
  loading: MyLoadingComponent
});

class BaseRoutes extends Component {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path="/" component={LoadableQuestions} />
          <Route
            path="/users/:user_id/:display_name"
            component={LoadableUsers}
          />
        </Switch>
      </AppContainer>
    );
  }
}

export default BaseRoutes;
