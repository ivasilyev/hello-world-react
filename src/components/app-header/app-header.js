import logo from "../svg/logo.svg";
import React from "react";
import './app-header.css'

export function AppHeader() {
    return (
        <header className="App__header">
            <div className="App__header__logo__pulser">
                <img src={logo} className="App__header__logo__spinner" alt="logo" />
            </div>

            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
                className="App__header__link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}


