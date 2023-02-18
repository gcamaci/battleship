import { GameBoard } from "../factories/gameboard";
import { Player } from "../factories/player";
import { Ship } from "../factories/ship";

test('hello1', () => {
    const ship = Ship(4)
    expect(ship.getHealth()).toBe(4)
})
