import React from "react";
import "./style.css";

function Instructions(props) {
    return <h1 className="title">{props.children}</h1>;
    }

export default Instructions;