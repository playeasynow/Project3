import React from 'react';
import "./style.css";

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button className="btn btn-dark logout" type="button" onClick={firebase.doSignOut}>
    sign out
  </button>
);

export default withFirebase(SignOutButton);