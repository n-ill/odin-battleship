import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";

const gameSetup = () => {
  let playerGameboard = Gameboard();
  let cpuGameboard = Gameboard();

  let playerShip1 = Ship(5);
  let playerShip2 = Ship(4);
  let playerShip3 = Ship(3);

  playerGameboard.placeShip(playerShip1, 0, 0);
  playerGameboard.placeShip(playerShip2, 0, 2);
  playerGameboard.placeShip(playerShip3, 0, 4);

  let cpuShip1 = Ship(5);
  let cpuShip2 = Ship(4);
  let cpuShip3 = Ship(3);

  cpuGameboard.placeShip(cpuShip1, 0, 9);
  cpuGameboard.placeShip(cpuShip2, 0, 7);
  cpuGameboard.placeShip(cpuShip3, 0, 5);
};

const createGameboardsDOM = () => {
  let playerBoard = document.querySelector("#player-gameboard");
  let cpuBoard = document.querySelector("#cpu-gameboard");

  for (let i = 0; i < 100; i++) {
    let playerGameboardSquare = document.createElement("div");
    playerGameboardSquare.className = "gameboard-square";
    playerGameboardSquare.classList.add(`p${i}`);
    playerBoard.appendChild(playerGameboardSquare);

    let cpuGameboardSquare = document.createElement("div");
    cpuGameboardSquare.className = "gameboard-square";
    cpuGameboardSquare.classList.add(`c${i}`);
    cpuBoard.appendChild(cpuGameboardSquare);
  }
};

createGameboardsDOM();
