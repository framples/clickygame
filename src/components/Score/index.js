import React from "react";
import "./style.css";

function Score() {
    return (
        <nav className="navbar sticky-top navbar-dark bg-light">
            <div className="col-12">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="navi-1">Picks n' Bans</h2>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h2 className="navi-3">Score: 0 | Top Score: 0</h2>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Score;