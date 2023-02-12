const GameBoard = () => {
    
    const ships = [];
    const missedAttacks = []

    const placeShip = (ship,...coords) => {
        let cors = coords
        ships.push({ship,cors});
    }

    const receiveAttack = (cord) => {
        
    }

    return{placeShip,ships,receiveAttack}
}

export{ GameBoard }