import React, { useEffect } from "react"
import "./Game.css"

const Game = () => {
    // const reducer = (total, currentValue) => {
    //     return total + currentValue
    // }

    let computerGuess = ""
    let userGuesses = []
    let attempts = 0
    let maxGuesses

    let low = 1
    let high = 100

    useEffect(() => {
        init()
    })

    const updateRange = () => {
        const rangeOutput = document.getElementById("rangeOutput")
        rangeOutput.innerText = `${low} - ${high}`
        rangeOutput.style.marginLeft = low + "%"
        rangeOutput.style.marginRight = 100 - high + "%"
        rangeOutput.classList.add("flash")

        const lowValue = document.getElementById("low")
        lowValue.style.flex = low + "%"
        lowValue.style.background = "#ef7b54"

        const space = document.getElementById("space")
        space.style.flex = high - low + "%"
        space.style.background = "#83e1d0"

        const highValue = document.getElementById("high")
        highValue.style.flex = 100 - high + "%"
        highValue.style.background = "#ef7b54"
    }

    const gameEnded = () => {
        document.getElementById("newGameButton").style.display = "inline"
        document.getElementById("inputBox").setAttribute("readonly", "readonly")
    }

    const newGame = () => {
        window.location.reload()
    }

    const init = () => {
        computerGuess = Math.floor(Math.random() * 100 + 1)
        console.log(computerGuess)
        document.getElementById("newGameButton").style.display = "none"
        document.getElementById("gameArea").style.display = "none"
    }

    const startGameView = () => {
        document.getElementById("welcomeScreen").style.display = "none"
        document.getElementById("gameArea").style.display = "block"
    }

    const easyMode = () => {
        maxGuesses = 10
        startGameView()
    }

    const hardMode = () => {
        maxGuesses = 5
        startGameView()
    }

    const compareGuess = () => {
        const userGuess = Number(document.getElementById("inputBox").value)
        userGuesses.push("" + userGuess)
        document.getElementById("guesses").innerHTML = userGuesses
        attempts++
        document.getElementById("attempts").innerHTML = attempts

        if (attempts < maxGuesses) {
            if (userGuess > computerGuess) {
                if (userGuess < high) high = userGuess
                document.getElementById("textOutput").innerHTML =
                    "Your guess is too high"
                document.getElementById("inputBox").value = ""
            } else if (userGuess < computerGuess) {
                if (userGuess > low) low = userGuess
                document.getElementById("textOutput").innerHTML =
                    "Your guess is too low"
            } else {
                document.getElementById("textOutput").innerHTML =
                    "Correct! You got it in " + attempts + " attempts"
                gameEnded()
            }
        } else {
            if (userGuess > computerGuess) {
                document.getElementById("textOutput").innerHTML =
                    "You lose!, The number was " + computerGuess
                document.getElementById("inputBox").value = ""
                gameEnded()
            } else if (userGuess < computerGuess) {
                document.getElementById("textOutput").innerHTML =
                    "You lose!, The number was " + computerGuess
                gameEnded()
            } else {
                document.getElementById("textOutput").innerHTML =
                    "Correct! You got it in " + attempts + " attempts"
                gameEnded()
            }
        }
        updateRange()
    }

    return (
        <main>
            <div id="welcomeScreen">
                <h2>
                    Guess the random number <br />
                    between 1-100
                </h2>
                <section>
                    <p>Select Difficulty setting:</p>
                    <div className="button-wrapper">
                        <button onClick={() => easyMode()}>
                            Easy: 10 Attempts
                        </button>
                        <button onClick={() => hardMode()}>
                            Hard: 5 Attempts
                        </button>
                    </div>
                </section>
            </div>
            <div id="gameArea">
                <button id="newGameButton" onClick={() => newGame()}>
                    New Game
                </button>
                <section>
                    <h3 id="textOutput">Your Guess:</h3>
                    <input
                        type="number"
                        id="inputBox"
                        min="1"
                        max="100"
                        onChange={() => compareGuess()}
                    ></input>
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
