import { Gameboard } from "./gameboard";

const Player = (board) => {
  const cpuTurn = () => {
    let currentBoard = board.boardStatus();
    let emptySpots = [];

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (currentBoard[y][x] === "") {
          emptySpots.push([x, y]);
        }
      }
    }

    const randomSpot =
      emptySpots[Math.floor(Math.random() * emptySpots.length)];
    board.receiveAttack(randomSpot[0], randomSpot[1]);
  };

  const playerControlledTurn = (x, y) => {
    board.receiveAttack(x, y);
  };

  return { cpuTurn, playerControlledTurn };
};

export { Player };
