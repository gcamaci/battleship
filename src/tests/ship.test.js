import { Ship } from "../factories/ship";

test('test to see if ship hit works', () => {
    const newShip = Ship(3)
    expect(newShip.hit()).toBe(2)
});

test('test to see if ship is sunk', () => {
    const newShip = Ship(3)
    expect(newShip.hit()).toBe(2)
    expect(newShip.isSunk()).toBeFalsy()
    expect(newShip.hit()).toBe(1)
    expect(newShip.isSunk()).toBeFalsy()
    expect(newShip.hit()).toBe(0)
    expect(newShip.isSunk()).toBeTruthy()
});



