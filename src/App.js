import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Cathrina Hao and is {""}
          <span
            href="https://github.com/cathrinahwj/react-project"
            target="_blank"
          >
            open-sourced on GitHub
          </span>
        </footer>
      </div>
    </div>
  );
}
