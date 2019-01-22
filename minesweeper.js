const printBoard = board => {
  console.log('Current Board: ')
  console.log(board[0].join(' | '))
  console.log(board[1].join(' | '))
  console.log(board[2].join(' | '))
}

// const blankLine = (' | | ');
// // The verticle line is known as a pipe, and the blankLine variable represents one row with 3 columns.

// console.log(`This is what an empty board would look like:`);
// // This is how we print vertically.
// console.log(blankLine);
// console.log(blankLine);
// console.log(blankLine);

// const guessLine = '1| | ';

// const bombLine = ' |B| ';

// console.log('This is what a board with a guess and a bomb on it would look like:');
// console.log(guessLine);
// console.log(bombLine);
// console.log(blankLine);

let board = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
];

printBoard(board);

// Make sure you put your select your array in its seperate bracket.
board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);