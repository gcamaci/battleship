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

    //user makes move,if hit check win and handle gameController
    const playRound = event => {
        let cord = event.target.dataset.cord 
        //if hit
        if(user.attack(cord,computer)){
            //this could be all the UI stuff.
            // 
        } else { 
            console.log('you missed')
        }


        //check win called down here, after enemy makes turn.
        //render boards called down here 
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

