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

/* const printBoard = board => {
  console.log('Current Board: ')
  console.log(board[0].join(' | '))
  console.log(board[1].join(' | '))
  console.log(board[2].join(' | '))
}

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
*/

const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
  const board = [];
  for(let i = 0; i < numberOfRows; i++) {
    // I used the = sign in my condition and I received a FATAL ERROR in my termianl. 
    let row = [];
    for(let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for(let i = 0; i < numberOfRows; i++) {
    let row = [];
    for(let j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
while (numberOfBombsPlaced < numberOfBombs){
/* The code in the while loop has the potential to place bombs 
on top of already existing bombs. This will be fixed when you learn about control flow.*/
const randomRowIndex = Math.floor(Math.random() * numberOfRows);
const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

board[randomRowIndex][randomColumnIndex] = 'B';

numberOfBombsPlaced++
}
  return board;
};

const printBoard = board => {
  // I used a bracket after my 'row=>' and my table did not print. 
  console.log(board.map(row => row.join(' | ')).join('\n'))
};

const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
