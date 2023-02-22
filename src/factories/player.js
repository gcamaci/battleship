import { GameBoard } from "./gameboard"
const Player = () => {

    const gameBoard = GameBoard()
    const attack = (cord,enemyBoard) => {
        enemyBoard.receiveAttack(cord)
    }

    const randomAttack = (enemyBoard) => {
        const randomCord = Math.floor(Math.random() * 100) + 1;
        enemyBoard.receiveAttack(randomCord.toString())
    }
    return {attack,gameBoard,randomAttack}
}

export {Player}