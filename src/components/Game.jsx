import React from "react"
import "./Game.css"

const Game = () => {
    // const reducer = (total, currentValue) => {
    //     return total + currentValue
    // }

    let computerGuess = ""

    const init = () => {
        computerGuess = Math.floor(Math.random() * 100 + 1)
        console.log(computerGuess)
        const newGameButton = document.getElementById("newGameButton")
        console.log(newGameButton)
    }

    return (
        <main onLoad={init()}>
            <div id="welcomeScreen">
                <h2>
                    Guess the random number <br />
                    between 1-100
                </h2>
                <section>
                    <p>Select Difficulty setting:</p>
                    <div className="button-wrapper">
                        <button>Easy: 10 Attempts</button>
                        <button>Hard: 5 Attempts</button>
                    </div>
                </section>
            </div>
            <div id="gameArea">
                <button id="newGameButton">New Game</button>
                <section>
                    <h3 id="textOutput">Your Guess:</h3>
                    <input type="number" id="inputBox"></input>
                </section>
                <section>
                    <p>Current range:</p>
                    <span id="rangeOutput">1 - 100</span>
                    <div id="range">
                        <span id="low"></span>
                        <span id="space"></span>
                        <span id="high"></span>
                    </div>
                </section>
                <section className="stats">
                    <div className="info">
                        <p>Number of previous attempts:</p>
                        <span id="attempts">0</span>
                    </div>
                    <div className="info">
                        <p>Your previous guesses: </p>
                        <span id="guesses">-</span>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Game
