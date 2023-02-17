import { GameBoard } from "../factories/gameboard";
import { Player } from "../factories/player";
import { Ship } from "../factories/ship";

test('player can attack enemy board', () => {
    const battleShip = Ship(3)
    const enemyGameBoard = GameBoard()
    enemyGameBoard.placeShip(battleShip,30,31,32)
    expect(enemyGameBoard.getShips()).toHaveLength(1)

    const playerBoard = GameBoard()
    const player = Player(playerBoard)
    player.attack(52,enemyGameBoard)
    expect(enemyGameBoard.getShips()[0].ship.getHealth()).toBe(3)
    player.attack(30,enemyGameBoard)
    expect(enemyGameBoard.getShips()[0].ship.getHealth()).toBe(2)
    player.attack(31,enemyGameBoard)
    player.attack(32,enemyGameBoard)
    expect(enemyGameBoard.getShips()[0].ship.isSunk()).toBeTruthy()
    


});