import React from "react";
import "./style.css";

function ChampCard(props) {
    return (
        <div className="card">
            <div className="img-container" onClick={() =>props.chooseChamp(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>

    )}

export default ChampCard;

