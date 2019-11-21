import React from "react";
import "./style.css";

function Instructions(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1>Picks n' Bans Memory Game!</h1>
            <br></br>
            <h3>Click on a league champion to score points. || Be wary, clicking the same image twice will start the game over!</h3>
        </div>
    );
    
}

export default Instructions;