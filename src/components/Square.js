import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button className={ `squares ${ value ? value : '' }` } onClick={ onClick }>
      { value }
    </button>
  );
};

export default Square;
