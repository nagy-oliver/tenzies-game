import React from "react";

export default function Cube(props) {
    return (
        <button id="cube" style={{
            backgroundColor: props.isClicked ? "#59E391" : "#FFFFFF"
        }} onClick={() => props.handleClick(props.id)}>
            {props.val}
        </button>
    )
}