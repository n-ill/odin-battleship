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
    if (aShip.size + x > BOARD_SIZE || aShip.size + y > BOARD_SIZE) {
      return "out of bounds";
    }

    // check orientation
    if (orientation !== "H" || orientation !== "V") {
      return "invalid orientation";
    }

    // check if ship intersects
    if (orientation === "H") {
      for (let i = 0; i < aShip.size; i++) {
        if (board[y][x + i] === "S") {
          return "invalid ship placement. Intersects another ship";
        }
      }
    } else if (orientation === "V") {
      for (let i = 0; i < aShip.size; i++) {
        if (board[y + i][x] === "S") {
          return "invalid ship placement. Intersects another ship";
        }
      }
    }

    // check if ship touches another ship

    

    if (orientation === "H") {
      for (let i = 0; i < aShip.size; i++) {
        board[y][x + i] = aShip.shipStatus()[i];
      }
    } else if (orientation === "V") {
      for (let i = 0; i < aShip.size; i++) {
        board[y + i][x] = aShip.shipStatus()[i];
      }
    }
  };

  const receiveAttack = (x, y) => {};

  return { boardStatus, placeShip, receiveAttack };
};

export { Gameboard };
