import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import history from "Utils/history";
import BaseRoutes from "./app/Routes";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/" component={BaseRoutes} />
          </div>
        </Router>
      </div>
    );
  }
}

//================================================Usage in actions to change routes
// import history from './history'
// history.push('/test') // this should change the url and re-render Test component
//================================================

export default App;
