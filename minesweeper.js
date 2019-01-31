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

class Game {
  constructor(numberOfRows,numberOfColumns,numberOfBombs) {
    this._board = new Board(numberOfRows,numberOfColumns,numberOfBombs);
  }
  playMove(rowIndex,columnIndex) {
    this._board.flipTile(rowIndex,columnIndex);
    if(this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over!')
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log('Congratulations! You have Won!')
    } else {
      console.log('Current Board:')
      this._board.print();
    }
  }
}



class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs) {
    this._numberOfBombs = numberOfBombs;

    this._numberOfTiles = (numberOfRows * numberOfColumns);
    this._playerBoard = Board.generatePlayerBoard(numberOfRows,numberOfColumns);
    this._bombBoard = Board.generatePlayerBoard(numberOfRows,numberOfColumns,numberOfBombs);
  }
  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex,columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!')
      return;
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
      } else {
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex,columnIndex);
      }
      this._numberOfTiles--;
    }
    getNumberOfNeighborBombs (rowIndex,columnIndex) {
      const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[1,-1],[0,1],[1,0],[1,1]];
      
      const numberOfRows = this._bombBoard.length;
      const numberOfColumns = this._bombBoard[0].length;

      let numberOfBombs = 0;
      
      //This function below is used to retrun the number of bombs in an adjacent neighbor.
      neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
        if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && 
          neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
          if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
            numberOfBombs++
          }
        }
      });
      return numberOfBombs;
      }
      hasSafeTiles() {
        return this._numberOfTiles !== this._numberOfBombs;
      }
      //TODO: Check to see if I need an parameter of 'board' in this print function.
      print() {
        // I used a bracket after my 'row=>' and my table did not print. 
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
      }
      static generatePlayerBoard(numberOfRows,numberOfColumns) {
        const board = [];
        for(let i = 0; i < numberOfRows; i++) {
          // I used the = sign in my loop condition and I received a FATAL ERROR in my termianl. 
          let row = [];
          for(let j = 0; j < numberOfColumns; j++) {
            row.push(' ');
          }
          board.push(row);
        }
        return board;
      }
      static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        const board = [];

        for(let i = 0; i < numberOfRows; i++) {
          const row = [];
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
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++
      }
    }
        return board;
      }
}

// const printBoard = board => {
//   // I used a bracket after my 'row=>' and my table did not print. 
//   console.log(board.map(row => row.join(' | ')).join('\n'));
// };

// const playerBoard = Board.generatePlayerBoard(3,4);
// const bombBoard = Board.generateBombBoard(3,4,5);

// console.log('Player Board: ');
// printBoard(playerBoard);
// console.log('Bomb Board: ');
// printBoard(bombBoard);

// flipTile(playerBoard,bombBoard, 0,1);
// console.log('Updated Player Board: ');
// printBoard(playerBoard);

const g = new Game(3, 3, 3);
g.playMove(0, 0);
g.playMove(1,0);