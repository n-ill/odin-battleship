import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

test("player controlled move registers on board", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);
  testGameboard.placeShip(testShip, 5, 5, "V");
  const testPlayer = Player(testGameboard);
  testPlayer.playerControlledTurn(5, 7);

  expect(testGameboard.boardStatus()).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", [testShip, 0], "", "", "", ""],
    ["", "", "", "", "", [testShip, 1], "", "", "", ""],
    ["", "", "", "", "", "X", "", "", "", ""],
    ["", "", "", "", "", [testShip, 3], "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("cpu turn", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);
  testGameboard.placeShip(testShip, 5, 5, "V");
  const testPlayer = Player(testGameboard);
  testPlayer.cpuTurn();

  console.log(testGameboard.boardStatus());
});
