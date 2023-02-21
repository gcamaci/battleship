import { Ship } from "../factories/ship";

test('Ship getters and setters work', () => {
    const ship = Ship(4)
    expect(ship.getHealth()).toBe(4);
    expect(ship.getPosition()).toBeTruthy();
    ship.togglePosition()
    expect(ship.getPosition()).toBeFalsy();
})


