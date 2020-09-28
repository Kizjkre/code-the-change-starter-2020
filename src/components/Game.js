import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const next = xIsNext ? 'X' : 'O';

  const handleClick = i => {
    if (!winner) {
      const temp = JSON.parse(JSON.stringify(board));
      if (!temp[i]) {
        temp[i] = next;
        setBoard(temp);
        setStepNumber(stepNumber + 1);
        setXIsNext(!xIsNext);
      }
    }
  };

  const jumpToStart = () => {
    const temp = JSON.parse(JSON.stringify(board));
    setBoard(temp.fill(null));
    setStepNumber(0);
    setXIsNext(true);
  };

  const result = () => winner ? `Winner: ${ winner }` : !board.some(square => square === null) ? `Tie Game` : `Next Player: ${ next }`;

  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>
      <Board squares={ board } onClick={ i => handleClick(i) } />
      <div className="info-wrapper">
        <div>
          <button className="start" onClick={ jumpToStart }>Go to Start</button>
        </div>
        <h3>{ result() }</h3>
      </div>
    </>
);
};

export default Game;
