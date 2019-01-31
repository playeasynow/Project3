import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import AccountPage from "./pages/Dashboard";
import Coaches from "./pages/Coaches";
import NoMatch from "./pages/NoMatch";
import Conference from "./pages/Conference";
import Nav from "./components/Nav";
import SignUpPage from "./components/SignUp";
import SignInPage from "./components/SignIn";
import PasswordForgetPage from "./components/PasswordForget";
import AdminPage from "./components/Admin";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={ROUTES.LANDING} component={Home} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
            <Route exact path={ROUTES.SURVEY} component={Forms} />
            <Route exact path={ROUTES.COACHES} component={Coaches} />
            <Route exact path={ROUTES.CONFERENCE} component={Conference} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
