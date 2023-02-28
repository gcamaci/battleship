import { renderComputerBoard } from "../ui/board";
import { Player } from "./player";

const GameController = (() => {
    const user = Player()
    const computer = Player()
    let gameOver = false;
    let allShipsPlaced = false;
    let shipsPlaced = 0;
    
    computer.gameBoard.randomShipPlacement()

    //user.gameBoard.randomShipPlacement()

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
        console.log(checkWin())
        renderComputerBoard(computer.getFlatBoard(),user.getFlatBoard());
        
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
    //buildComputerBoard(playRound,computer.getFlatBoard(),user.getFlatBoard())

    
    return {
        playRound,
        user,
        computer
    }
})()

export { GameController }

