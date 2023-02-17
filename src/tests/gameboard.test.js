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

test('recieve attack, and hit correct ship',() => {
    const battleShip = Ship(4)
    const gameBoard = GameBoard()
    gameBoard.placeShip(battleShip,30,31,32,33);
    gameBoard.receiveAttack(30)
    expect(gameBoard.ships[0].ship.getHealth()).toBe(3)
    expect(gameBoard.attempts).toHaveLength(0)
})

test('receive attack,but miss', () => {
    const battleShip = Ship(4)
    const gameBoard = GameBoard()
    gameBoard.placeShip(battleShip,30,31,32,33);
    gameBoard.receiveAttack(47)
    expect(gameBoard.ships[0].ship.getHealth()).toBe(4)
    expect(gameBoard.attempts[0]).toStrictEqual(47)


})

test('game winner',() => {
    const battleShip = Ship(2)
    const gameBoard = GameBoard()
    gameBoard.placeShip(battleShip,30,31);
    gameBoard.receiveAttack(30)
    gameBoard.receiveAttack(31)
    expect(gameBoard.receiveAttack(31)).toBe("Game Over")
    

})