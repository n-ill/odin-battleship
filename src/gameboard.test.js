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
    ["", "", "", "", "", "", testShip, testShip, testShip, testShip],
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
    ["", "", "", "", "", "", testShip, "", "", ""],
    ["", "", "", "", "", "", testShip, "", "", ""],
    ["", "", "", "", "", "", testShip, "", "", ""],
    ["", "", "", "", "", "", testShip, "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("placing ship out of bounds horizontally", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);

  expect(testGameboard.placeShip(testShip, 7, 4)).toBe("out of bounds horizontally");
});

test("placing ship out of bounds vertically", () => {
    const testGameboard = Gameboard();
    const testShip = Ship(4);
  
    expect(testGameboard.placeShip(testShip, 7, 8, "V")).toBe("out of bounds vertically");
  });

test("ships intersect", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4);
  const testShip1 = Ship(4);
  testGameboard.placeShip(testShip, 6, 4);

  expect(testGameboard.placeShip(testShip1, 7, 2, "V")).toBe("invalid ship placement. Intersects another ship");
});
