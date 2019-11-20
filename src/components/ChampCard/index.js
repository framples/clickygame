import React from "react";
import "./style.css";

function ChampCard(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="card">
                        <div className="img-container">
                            <img alt={props.name} src={props.image} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default ChampCard;