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
    ["", "", "", "", "", "", "S", "S", "S", "S"],
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
    ["", "", "", "", "", "", "S", "", "", ""],
    ["", "", "", "", "", "", "S", "", "", ""],
    ["", "", "", "", "", "", "S", "", "", ""],
    ["", "", "", "", "", "", "S", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("placing ship out of bounds", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);

  expect(testGameboard.placeShip(testShip, 7, 4)).toBe("out of bounds");
});
