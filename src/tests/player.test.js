import { GameBoard } from "../factories/gameboard";
import { Player } from "../factories/player";


test('gameBoard inside player',() => {
    const computer = Player()
    const user = Player()


    expect(user.gameBoard.getShips()).toHaveLength(5)
    expect(user.gameBoard.getShips()[0].getName()).toBe('submarine')
    
    
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[0],'4')
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[1],'40')
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[2],'32')
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[3],'95')
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[4],'64')
    
    user.attack('95', computer)
    expect(computer.gameBoard.getShips()[3].getHealth()).toBe(4)
})
