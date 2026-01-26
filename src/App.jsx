import { useState } from 'react';
import { languages } from "./languages.js";
import { clsx } from "clsx"
export default function AssemblyEndgame() {

    const [guessedLetters, setGuessedLetters] = useState([]);
    // const [guessedLetters, setGuessedLetters] = useState(new Set()); // o(1) lookup

    const [currentWord, setCurrentWord] = useState("react");

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function addGuessedLetters(letter) {
        setGuessedLetters((prevLetters) =>
            prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
        );
        //setGuessedLetters((prevLetters) =>prevLetters.has(letter) ? prevLetters : new Set([...prevLetters, letter])
        // if i use same set, it wont rerender it because the state reference remains the same
    }

    const keyboardElements = alphabet.split("").map((elem, idx) => {
        const isGuessed = guessedLetters.includes(elem);
        const isCorrect = isGuessed && currentWord.includes(elem);
        const isWrong = isGuessed && !currentWord.includes(elem); 
        
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong,

        }) // applies the appropriate class ie gives the object with true values. they keys are the class name

        return (
            // based on the above conditions, you would have to do a complicated if condition. to stop that, we use clsx
            <button className = {className} key={idx} onClick={() => addGuessedLetters(elem)}>{elem.toUpperCase()}</button>
        )
    });

    const letterElements = currentWord.split("").map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
    ))


    const languageElements = languages.map(lang => {
        const style = {
            backgroundColor: lang.backgroundColor,
            color: lang.color,
        }
        return (
            <span 
                className="chip"
                style={style}
                key={lang.name} // cause the language names are guaranteed to be unique
            >
                {lang.name}
            </span>
        )
    })

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}