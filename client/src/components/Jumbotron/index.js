import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return <div className="jumbotron container oswald-font">{children}</div>
}

export default Jumbotron;