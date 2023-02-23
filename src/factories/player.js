import { GameBoard } from "./gameboard"
const Player = () => {

    const gameBoard = GameBoard()

    const attack = (cord,enemy) => {
        return enemy.gameBoard.receiveAttack(cord)
        //note, receiveAttack returns a boolean true if ship was hit. 
    }
    const getFlatBoard = () => {
        
    }

    const randomAttack = (enemyBoard) => {
        const randomCord = Math.floor(Math.random() * 100) + 1;
        enemyBoard.receiveAttack(randomCord.toString())
    }
    return {attack,gameBoard,randomAttack}
}

export {Player}

