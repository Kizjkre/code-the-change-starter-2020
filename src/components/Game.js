import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([[null, null, null, null, null, null, null, null, null]]);

  const winner = calculateWinner(history[stepNumber]);
  const next = xIsNext ? 'X' : 'O';

  const handleClick = i => {
    if (!winner) {
      const temp = JSON.parse(JSON.stringify(history));
      if (!temp[stepNumber][i]) {
        temp.push(JSON.parse(JSON.stringify(temp[stepNumber])));
        temp[stepNumber + 1][i] = next;
        setHistory(temp);
        setStepNumber(stepNumber + 1);
        setXIsNext(!xIsNext);
      }
    }
  };

  // console.log(history);
  const jump = step => {
    const newHistory = history.slice(0, step + 1);
    setHistory(newHistory);
    setStepNumber(step);
    setXIsNext(!!(newHistory.length % 2));
  };

  const result = () => winner ? `Winner: ${ winner }` : !history[stepNumber].some(square => square === null) ? `Tie Game` : `Next Player: ${ next }`;



  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>
      <Board squares={ history[stepNumber] } onClick={ i => handleClick(i) } />
      <div className="info-wrapper">
        <div>
          <button className="start" onClick={ () => jump(0) }>Go to Start</button>
        </div>
        <h3>{ result() }</h3>
      </div>
    </>
);
};

export default Game;
