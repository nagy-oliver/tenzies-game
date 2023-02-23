import React from "react";
import Game from "./components/Game"

export default function App() {
    return (
        <div className="mainContent">
            <header>
                <h1 className="title">Tenzies</h1>
                <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </header>
            <Game />
        </div>
    )
}