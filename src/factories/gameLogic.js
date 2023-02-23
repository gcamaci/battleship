import { buildComputerBoard } from "../ui/board";
import { Player } from "./player"
const GameController = (() => {
    const user = Player()
    const computer = Player()
    let gameOver = false;
    let userPlacedShips = false;
    //manually placing ships in enemy board for now. should create a player function that inializes board randomly
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[0],'4')
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[1],'40')
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[2],'32')
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[3],'95')
    computer.gameBoard.placeShip(computer.gameBoard.getShips()[4],'64')


    const playRound = event => {
        let cord = event.target.dataset.cord 
        if(user.attack(cord,computer)){
            console.log('you hit a ship')
        } else { 
            console.log('you missed')
        }
    }

    const checkWin = () => {

    }

    //creates computer board with playround as click event callback and flattened board for rendering board
    buildComputerBoard(playRound,computer.getFlatBoard())

    
    return {
        playRound,
        user,
        computer
    }
})()

export { GameController }

