import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Dashboard from "./pages/Dashboard";
// import LoggedOut from "./pages/LoggedOut";
import Coaches from "./pages/Coaches";
import NoMatch from "./pages/NoMatch";
import Conference from "./pages/Conference";
import Nav from "./components/Nav";

class App extends Component {

  componentWillMount() {
    // this.setupAjax();
    // this.parseHash();
    // this.setState();
  }
  // Add access_token if available with each XHR request to API
//   setupAjax() {
//   $.ajaxSetup({
//     'beforeSend': function (xhr) {
//       if (localStorage.getItem('access_token')) {
//         xhr.setRequestHeader('Authorization',
//           'Bearer ' + localStorage.getItem('access_token'));
//       }
//     }
//   });
// }

// Extract the access_token and id_token from Auth0 Callback after login
// parseHash() {
//   this.auth0 = new auth0.WebAuth({
//     domain: AUTH0_DOMAIN,
//     clientID: AUTH0_CLIENT_ID
//   });
//   this.auth0.parseHash(window.location.hash, function (err, authResult) {
//     if (err) {
//       return console.log(err);
//     }
//     if (authResult !== null && authResult.accessToken !== null && authResult.idToken !== null) {
//       localStorage.setItem('access_token', authResult.accessToken);
//       localStorage.setItem('id_token', authResult.idToken);
//       localStorage.setItem('profile', JSON.stringify(authResult.idTokenPayload));
//       window.location = window.location.href.substr(0, window.location.href.indexOf('#'))
//     }
//   });
// }
// Set user login state
// setState() {
//   var idToken = localStorage.getItem('id_token');
//   if (idToken) {
//     this.loggedIn = true;
//   } else {
//     this.loggedIn = false;
//   }
// }

render() {

  // if (this.loggedIn) {
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
    )
  // } else {
  //   return (<LoggedOut />)
  // }
}
}

export default App;
