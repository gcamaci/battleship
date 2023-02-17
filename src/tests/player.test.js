import { GameBoard } from "../factories/gameboard";
import { Player } from "../factories/player";
import { Ship } from "../factories/ship";

test('player can attack enemy board', () => {
    const battleShip = Ship(3)
    const enemyGameBoard = GameBoard()
    const enemyPlayer = Player(enemyGameBoard)
    enemyPlayer.gameBoard.placeShip(battleShip,30,31,32)
    expect(enemyPlayer.gameBoard.getShips()).toHaveLength(1)

    const playerBoard = GameBoard()
    const player = Player(playerBoard)
    player.attack(52,enemyPlayer.gameBoard)
    expect(enemyPlayer.gameBoard.getShips()[0].ship.getHealth()).toBe(3)
    player.attack(30,enemyPlayer.gameBoard)
    expect(enemyPlayer.gameBoard.getShips()[0].ship.getHealth()).toBe(2)
    player.attack(31,enemyPlayer.gameBoard)
    player.attack(32,enemyPlayer.gameBoard)
    expect(enemyPlayer.gameBoard.getShips()[0].ship.isSunk()).toBeTruthy()
    
    enemyPlayer.randomAttack(player.gameBoard)
    expect(player.gameBoard.attempts).toHaveLength(1)

});