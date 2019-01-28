import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return <div className="jumbotron container mt-4">{children}</div>
}

export default Jumbotron;