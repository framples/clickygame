import React from "react";
import "./style.css";

function Score() {
    return (
        <nav className="navbar sticky-top navbar-dark bg-secondary" id="scoreboard">
            <div className="col-12">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="navi-3">Score: {Score.score} | Top Score: {Score.topScore}</h2>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Score;