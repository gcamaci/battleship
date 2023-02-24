import { Ship } from "../factories/ship";

test('Ship getters and setters work', () => {
    const ship = Ship(4)
    expect(ship.getHealth()).toBe(4);
    expect(ship.getPosition()).toBeTruthy();
    ship.togglePosition()
    expect(ship.getPosition()).toBeFalsy();
    expect(ship.getName()).toBe('navy')
})

test('Ship.hit() returns boolean if sunk',() => {
    const ship = Ship(4)
    expect(ship.hit()).toBe(3)
    expect(ship.hit()).toBe(2)
    expect(ship.hit()).toBe(1)
    expect(ship.hit()).toBe(0)
    expect(ship.hit()).toBe(true)

})


