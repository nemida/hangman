import { useState } from 'react';
import { languages } from "./languages.js";
export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react");

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const keyboardElements = alphabet.split("").map((elem, idx) => (
        <button key={idx}>{elem.toUpperCase()}</button>
    ));

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