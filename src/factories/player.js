import { GameBoard } from "./gameboard"
const Player = () => {
    const gameBoard = GameBoard()
    let shipsPlaced = 0;
    let doneWithPlacement = false;
    let currentShip = gameBoard.getShips()[shipsPlaced]

    const attack = (cord,enemy) => {
        return enemy.gameBoard.receiveAttack(cord)
        //note, receiveAttack returns a boolean true if ship was hit. 
    }
    const getFlatBoard = () => {
        let attribute_values = gameBoard.getBoard().flat()
        return attribute_values

    }

    const randomAttack = (enemyBoard) => {
        const randomCord = Math.floor(Math.random() * 100) + 1;
        return enemyBoard.receiveAttack(randomCord.toString())
    }
    //event listener
    const switchPlaceDirection = () => {
        currentShip.togglePosition()
        console.log(currentShip.getPosition())
    }
    const placeUserShip = (event) => {
        let cord = event.target.dataset.cord
        
        if(!doneWithPlacement){
            if (!gameBoard.checkValidTarget(cord,currentShip.length,currentShip.getPosition())) return
            gameBoard.placeShip(currentShip, cord)
            console.log(currentShip.getName())
            shipsPlaced = shipsPlaced + 1
        }
        
        if(shipsPlaced === 5){
            doneWithPlacement = true
            
        }else{
            currentShip = gameBoard.getShips()[shipsPlaced]
        }
    }
    return { 
        attack,
        gameBoard,
        randomAttack,
        getFlatBoard,
        placeUserShip,
        switchPlaceDirection
    }
}



export {Player}

