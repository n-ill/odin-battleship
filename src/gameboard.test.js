import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

test("test gameboard creation", () => {
  const testGameboard = Gameboard();

  expect(testGameboard.boardStatus()).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("placing ship horizontally", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);
  testGameboard.placeShip(testShip, 6, 4);

  expect(testGameboard.boardStatus()).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      [testShip, 0],
      [testShip, 1],
      [testShip, 2],
      [testShip, 3],
    ],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("placing ship vertically", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);
  testGameboard.placeShip(testShip, 6, 4, "V");

  expect(testGameboard.boardStatus()).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", [testShip, 0], "", "", ""],
    ["", "", "", "", "", "", [testShip, 1], "", "", ""],
    ["", "", "", "", "", "", [testShip, 2], "", "", ""],
    ["", "", "", "", "", "", [testShip, 3], "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("placing ship out of bounds horizontally", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);

  expect(testGameboard.placeShip(testShip, 7, 4)).toBe(
    "out of bounds horizontally"
  );
});

test("placing ship out of bounds vertically", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);

  expect(testGameboard.placeShip(testShip, 7, 8, "V")).toBe(
    "out of bounds vertically"
  );
});

test("ships intersect", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);
  const testShip1 = Ship(4);
  testGameboard.placeShip(testShip, 6, 4);

  expect(testGameboard.placeShip(testShip1, 7, 2, "V")).toBe(
    "invalid ship placement. Intersects another ship"
  );
});

test.skip("ship next to another ship", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);
  const testShip1 = Ship(4);
  testGameboard.placeShip(testShip, 6, 4);

  expect(testGameboard.placeShip(testShip1, 6, 5)).toBe(
    "invalid ship placement. Next to another ship"
  );
});

test("hitting a ship on the board", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(3);
  testGameboard.placeShip(testShip, 5, 5, "V");
  testGameboard.receiveAttack(5, 6);

  expect(testGameboard.boardStatus()).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", [testShip, 0], "", "", "", ""],
    ["", "", "", "", "", "X", "", "", "", ""],
    ["", "", "", "", "", [testShip, 2], "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("missing a ship on the board", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(3);
  testGameboard.placeShip(testShip, 5, 5, "V");
  testGameboard.receiveAttack(2, 2);

  expect(testGameboard.boardStatus()).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "M", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", [testShip, 0], "", "", "", ""],
    ["", "", "", "", "", [testShip, 1], "", "", "", ""],
    ["", "", "", "", "", [testShip, 2], "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("game over; all ships sunk", () => {
  const testGameboard = Gameboard();
  let ships = [];
  const testShip = Ship(3);
  ships.push(testShip);
  testGameboard.placeShip(testShip, 1, 1);
  testGameboard.receiveAttack(1, 1);
  testGameboard.receiveAttack(2, 1);
  testGameboard.receiveAttack(3, 1);

  expect(testGameboard.isGameOver(ships)).toBeTruthy();
});

test("game NOT over; all ships NOT sunk", () => {
  const testGameboard = Gameboard();
  let ships = [];
  const testShip = Ship(3);
  ships.push(testShip);
  testGameboard.placeShip(testShip, 1, 1);
  testGameboard.receiveAttack(1, 1);
  testGameboard.receiveAttack(2, 1);

  expect(testGameboard.isGameOver(ships)).toBeFalsy();
});
