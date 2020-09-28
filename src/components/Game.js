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
        if (!temp.hasOwnProperty(stepNumber + 1)) {
          temp.push(JSON.parse(JSON.stringify(temp[stepNumber])));
        } else {
          temp[stepNumber + 1] = JSON.parse(JSON.stringify(temp[stepNumber]));
        }
        temp[stepNumber + 1][i] = next;
        console.log(stepNumber, temp);
        setHistory(temp);
        setStepNumber(stepNumber + 1);
        setXIsNext(!xIsNext);
      }
    }
  };

  const jump = step => {
    setStepNumber(step);
    setXIsNext(!(step % 2));
  };

  const result = () => winner ? `Winner: ${ winner }` : !history[stepNumber].some(square => square === null) ? `Tie Game` : `Next Player: ${ next }`;

  const renderMoves = () => {
    const buttons = [];
    for (let i = 0; i < history.length; i++) {
      buttons.push((
        <span key={ `button-${ i }` }>
          <button onClick={ () => jump(i) }>Go to { i === 0 ? 'Start' : `Move #${ i }` }</button>
          <br />
          <br />
        </span>
      ));
    }
    return buttons;
  };

  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>
      <Board squares={ history[stepNumber] } onClick={ i => handleClick(i) } />
      <div className="info-wrapper">
        <div>
          { renderMoves() }
        </div>
        <h3>{ result() }</h3>
      </div>
    </>
  );
};

export default Game;
