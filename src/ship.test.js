import { Ship } from "./ship";

test("testing ship size", () => {
  const testShip = Ship(5);

  expect(testShip.size).toBe(5);
});

test("testing ship array creation", () => {
  const testShip = Ship(5);

  expect(testShip.shipStatus()).toEqual(["S", "S", "S", "S", "S"]);
});

test("testing ship's hit function", () => {
  const testShip = Ship(5);
  testShip.hit(1);

  expect(testShip.shipStatus()).toEqual(["S", "X", "S", "S", "S"]);
});

test("ship should not sink", () => {
  const testShip = Ship(5);

  expect(testShip.isSunk()).toBeFalsy();
});

test("ship should sink", () => {
  const testShip = Ship(5);
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);

  expect(testShip.isSunk()).toBeTruthy();
});
