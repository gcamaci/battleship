import { buildComputerBoard, renderComputerBoard } from "../ui/board";

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

    //manually placing user ships 
    user.gameBoard.placeShip(user.gameBoard.getShips()[0],'6')
    user.gameBoard.placeShip(user.gameBoard.getShips()[1],'45')
    user.gameBoard.placeShip(user.gameBoard.getShips()[2],'20')
    user.gameBoard.placeShip(user.gameBoard.getShips()[3],'72')
    user.gameBoard.placeShip(user.gameBoard.getShips()[4],'91')

    //user makes move,if hit check win and handle gameController
    const playRound = event => {
        if (gameOver) return
        let cord = event.target.dataset.cord 

        //this causing problems, returning an array with ship, even tho there wont always be ship
        //const [userHit, userTarget] = user.attack(cord,computer)
        //[computerHit, computerTarget] = computer.randomAttack(user.gameBoard);

        
        //still returning array for now
        user.attack(cord,computer)
        computer.randomAttack(user.gameBoard)

        //console.log(userHit)
    
        
        renderComputerBoard(computer);
       
        console.log(checkWin())
        //check win called down here, after enemy makes turn.
        //render boards called down here 
    }
    //make mock function to test this, drain ship health
    const checkWin = () => {
        let computerWin = user.gameBoard.allShipSunk()
        let userWin = computer.gameBoard.allShipSunk()
        if(userWin && !computerWin){
            gameOver = true;
            //can just do some ui stuff for returns
            return 'User Wins'
        } else if (computerWin && !userWin){
            gameOver = true;
            return 'Computer Wins'
        } else {
            return 'Game Still In progress'
        }



        console.log(computer.gameBoard.allShipSunk())
        //returns boolean from allShipSunk
    }

    //creates computer board with playround as click event callback and flattened board for rendering board
    buildComputerBoard(playRound,computer.getFlatBoard(),user.getFlatBoard())

    
    return {
        playRound,
        user,
        computer
    }
})()

export { GameController }

