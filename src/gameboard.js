import { Ship } from "./ship";

const Gameboard = () => {
  const board = [];
  const BOARD_SIZE = 10;

  const initBoard = () => {
    for (let i = 0; i < BOARD_SIZE; i++) {
      let boardRow = [];

      for (let j = 0; j < BOARD_SIZE; j++) {
        boardRow.push("");
      }

      board.push(boardRow);
    }
  };
  initBoard();

  const boardStatus = () => {
    return board;
  };

  const placeShip = (aShip, x, y, orientation = "H") => {
    if (aShip.size + x > BOARD_SIZE && orientation === "H") {
      return "out of bounds horizontally";
    } else if (aShip.size + y > BOARD_SIZE && orientation === "V") {
      return "out of bounds vertically";
    }

    // check if ship intersects another ship
    if (orientation === "H") {
      for (let i = 0; i < aShip.size; i++) {
        if (board[y][x + i] !== "") {
          return "invalid ship placement. Intersects another ship";
        }
      }
    } else if (orientation === "V") {
      for (let i = 0; i < aShip.size; i++) {
        if (board[y + i][x] !== "") {
          return "invalid ship placement. Intersects another ship";
        }
      }
    }

    // check if ship directly next to another ship

    if (orientation === "H") {
      for (let i = 0; i < aShip.size; i++) {
        board[y][x + i] = [aShip, i];
      }
    } else if (orientation === "V") {
      for (let i = 0; i < aShip.size; i++) {
        board[y + i][x] = [aShip, i];
      }
    }
  };

  const receiveAttack = (x, y) => {
    if (board[y][x] !== "" && board[y][x] !== "X" && board[y][x] !== "M") {
      board[y][x][0].hit(board[y][x][1]);
      board[y][x] = "X";
    }
    if (board[y][x] === "") {
      board[y][x] = "M";
    }
  };

  return { boardStatus, placeShip, receiveAttack };
};

export { Gameboard };
