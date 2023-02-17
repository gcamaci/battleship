const Player = (gameBoard) => {


    const attack = (cord,enemyBoard) => {
        enemyBoard.receiveAttack(cord)
    }
    return {attack}
}

export {Player}