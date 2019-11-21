import React from "react";
import "./style.css";

function ChampCard(props) {
    return (
        <div className="card">
            <div className="img-container" onClick={() =>{props.clickedOn(props.id); props.scoreBoard();}}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>

    )}

export default ChampCard;

