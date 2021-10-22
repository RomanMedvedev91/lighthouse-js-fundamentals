let whiteQueen = [0, 5];
let blackQueen = [5, 0];
const generateBoard = function (whiteQueen, blackQueen) {
  const chessTable = [];
  for (let i = 0; i < 8; i++) {
    chessTable.push([]);
    for (let j = 0; j < 8; j++) {
      if (whiteQueen[0] === i && whiteQueen[1] === j) chessTable[i].push(1);
      else if (blackQueen[0] === i && blackQueen[1] === j)
        chessTable[i].push(1);
      else chessTable[i].push(0);
    }
  }
  return chessTable;
};

const queenThreat = function (generatedBoard) {
  let win = false;

  const board = generatedBoard;

  let whiteCoord = [];
  let blackCoord = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // find the queens
      if (board[i][j] === 1) {
        if (whiteCoord.length === 0) {
          whiteCoord = [i, j];
        } else {
          blackCoord = [i, j];
        }
      }
    }
  }

  // check white position
  const isHorizontal = function () {
    let result = false;
    for (let j = 0; j < board.length; j++) {
      // find the queens
      if (board[whiteCoord[0]][j] === 1 && j !== whiteCoord[1]) result = true;
    }
    return result;
  };

  const isVertical = function () {
    let result = false;
    for (let i = 0; i < board.length; i++) {
      if (board[i][whiteCoord[1]] && i !== whiteCoord[0]) result = true;
    }
    return result;
  };

  const diagonal = function () {
    let result = false;

    let countPositive = 1;
    for (let i = whiteCoord[0] + 1; i < board.length; i++) {
      if (board[i][whiteCoord[1] + countPositive] === 1) {
        result = true;
      } else if (board[i][whiteCoord[1] - countPositive] === 1) {
        result = true;
      }
      countPositive++;
    }

    let countNegative = 1;
    for (let i = whiteCoord[0]; i < board.legth; i--) {
      if (board[i - 1][whiteCoord[1] - countNegative] === 1) {
        result = true;
      } else if (board[i - 1][whiteCoord[1] + countPositive] === 1) {
        result = true;
      }
      countNegative++;
    }
    return result;
  };

  if (isHorizontal() || isVertical() || diagonal()) win = true;
  return win;
};
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
