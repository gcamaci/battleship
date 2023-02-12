import { Ship } from "../factories/ship";
import { GameBoard } from "../factories/gameboard";
//somehow test click event that takes 




test('push ship and ship cords to gameBoard array', () => {
    const battleShip = Ship(4)
    const gameBoard = GameBoard()
    gameBoard.placeShip(battleShip,30,31,32,33);

    expect(gameBoard.ships).toHaveLength(1)
    expect(gameBoard.ships[0]).toEqual({
        ship: battleShip,
        cors: [30,31,32,33]
    })

});     


test('see if receive attack works',() => {
    const battleShip = Ship(4)
    const gameBoard = GameBoard()
    gameBoard.placeShip(battleShip,30,31,32,33);
    gameBoard.receiveAttack(30)
    expect(gameBoard.ships[0].ship.getHealth()).toBe(3)
})

