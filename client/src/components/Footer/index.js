import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="container-fluid fix-bottom">
            {/* <hr /> */}
            <p className="text-center">
                <i className="fab fa-github" /> <a href="https://github.com/playeasynow/Project3" target="_blank" rel="noopener noreferrer">Guru Match</a> <br /> powered by React.js
            </p>
        </footer>
    );
}

export default Footer;