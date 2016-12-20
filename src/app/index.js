import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { Home } from "./components/Home";
import { App } from "./components/App";
import { Login } from "./components/Login";
import { ViewItem } from "./components/ViewItem";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
  const routes = (<Router history={browserHistory}>
                      <Route path="/" component={Login}>
                          <IndexRoute component = {Login}></IndexRoute>
                      </Route>
                      <Route path="/view" component={ViewItem} />
                      <Route path="/app" component={App} />
                      <Route path="/sign-in" component={SignIn} />
                      <Route path="/sign-up" component={SignUp} />
                    </Router>);

render(routes, document.getElementById('app'));
