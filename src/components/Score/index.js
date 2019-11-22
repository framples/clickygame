import React from "react";
import "./style.css";


function Score(props) {

    return (
        <div>
            <div className="row top-row">
                <div className="col s8 m8 l8">
                    <h6 className="clickMessage">{props.clickMessage}</h6>
                </div>
                <div className="col s1 m1 l1">
                    <h6 className="correctClicks">{props.correctClicks}</h6>
                </div>
                <div className="col s1 m1 l1">
                    <h6 className="topScore">{props.topScore}</h6>
                </div>
            </div>
        </div>

    )
}
export default Score;







/*function Score() {
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

export default Score; */