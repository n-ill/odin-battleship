import { Gameboard } from "./gameboard";

const Player = (p = "controlled", board) => {
  const playTurn = () => {
    if (p === "cpu") {
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
        emptySpots[[Math.floor(Math.random() * emptySpots.length)]];
      board.receiveAttack(randomSpot[0], randomSpot[1]);
    }
  };

  return { playTurn };
};

export { Player };
