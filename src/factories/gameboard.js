const GameBoard = () => {
    
    const ships = [];
    const attempts = []
    const getShips = () => ships;

    const placeShip = (ship,...coords) => {
        let cors = coords
        ships.push({ship,cors});
    }

    const receiveAttack = (cord) => {
        ships.forEach((shipObj) => {
            if(shipObj.cors.includes(cord)){
                shipObj.ship.hit()
            }
        });
        attempts.push(cord)
    }

    

    return{placeShip,getShips,ships,receiveAttack,attempts}
}

export{ GameBoard }