import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Dashboard from "./pages/Dashboard";
import Coaches from "./pages/Coaches";
import NoMatch from "./pages/NoMatch";
import Conference from "./pages/Conference";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Forms} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/coaches" component={Coaches} />
          <Route exact path="/conference" component={Conference} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
