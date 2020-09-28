import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className="board">
    { squares.map((square, i) => <Square key={ `square-${ i }` } value={ square } onClick={ () => onClick(i) } />) }
  </div>
);

export default Board;
