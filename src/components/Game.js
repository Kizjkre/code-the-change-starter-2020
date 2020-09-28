import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const next = xIsNext ? '×' : 'O';

  const handleClick = i => {
    if (!winner) {
      const temp = JSON.parse(JSON.stringify(board));
      temp[i] = next;
      setBoard(temp);
      setStepNumber(stepNumber + 1);
      setXIsNext(!xIsNext);
    }
  };

  return (
    <Board squares={ board } onClick={ i => handleClick(i) } />
  );
};

export default Game;
