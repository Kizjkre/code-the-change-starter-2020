export function calculateWinner(squares) {
  const wins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  const x = [];
  const o = [];

  for (const i in squares) {
  	if (squares.hasOwnProperty(i)) {
  	  switch (squares[i]) {
        case '×':
          x.push(parseInt(i));
          break;
        case 'O':
          o.push(parseInt(i));
          break;
      }
  	}
  }

  let winner = null;

  wins.forEach(condition => {
    if (x.includes(condition[0]) && x.includes(condition[1]) && x.includes(condition[2])) {
      winner = '×';
    } else if (o.includes(condition[0]) && o.includes(condition[1]) && o.includes(condition[2])) {
      winner = 'O';
    }
  });

  return winner;
}
