import React from "react";
import "./style.css";


function Score(props) {

    return (
        <div className="scoreboard">
            <div className="row top-row">
                <div className="col s8 m8 l8">
                    <h6 className="clickMessage">{props.clickMessage}</h6>
                </div>
                <div className="col s1 m1 l1">
                    <h6 className="correctClicks">correct clicks: {props.correctClicks}</h6>
                </div>
                <div className="col s1 m1 l1">
                    <h6 className="topScore">top score: {props.topScore}</h6>
                </div>
            </div>
        </div>

    )
}
export default Score;

