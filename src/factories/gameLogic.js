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

    //manually placing user ships 
    user.gameBoard.placeShip(user.gameBoard.getShips()[0],'3')
    user.gameBoard.placeShip(user.gameBoard.getShips()[1],'41')
    user.gameBoard.placeShip(user.gameBoard.getShips()[2],'30')
    user.gameBoard.placeShip(user.gameBoard.getShips()[3],'85')
    user.gameBoard.placeShip(user.gameBoard.getShips()[4],'74')

    //user makes move,if hit check win and handle gameController
    const playRound = event => {
        if (gameOver) return
        let cord = event.target.dataset.cord 

        const [userHit, userTarget] = user.attack(cord,computer)
        const [computerHit, computerTarget] = computer.randomAttack(user.gameBoard)

        console.log(userHit)
        console.log(userTarget.getName())
        /*
        if(computer.randomAttack(user.gameBoard)){
            console.log('computer hit you')
        } else{
            console.log('computer miss')
        }


        if(user.attack(cord,computer)){
            console.log('you hit') 
        } else { 
            console.log('you missed')
        }
        */
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
    buildComputerBoard(playRound,computer.getFlatBoard())

    
    return {
        playRound,
        user,
        computer
    }
})()

export { GameController }

