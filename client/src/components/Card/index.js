import React from "react";
import "./style.css";

function Card({ title, children }) {
    return(
        <div className="card mt-4">
            <div className="card-header coach-header">
                <h3>
                <strong>
                    <i aria-hidden="true" /> {title}
                </strong>
                </h3>
            </div>
            <div className="card-body pt-0">{children}</div>
        </div>
    );
}

export default Card;