import { GameBoard } from "./gameboard"
const Player = () => {
    const gameBoard = GameBoard()
    let shipsPlaced = 0;
    let doneWithPlacement = false;

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
    
    return { 
        attack,
        gameBoard,
        randomAttack,
        getFlatBoard
    }
}



export {Player}

