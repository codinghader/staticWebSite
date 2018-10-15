import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../../Routes/Home";

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

const Routes: React.SFC = () => (
  <Switch>
    <Route path={""} exact={true} component={Home} />

    {/* <Route path={"/social-login"} component={SocialLogin} /> */}
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default AppPresenter;
