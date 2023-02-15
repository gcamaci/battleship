const GameBoard = () => {
    
    const ships = [];
    const attempts = []
    const getShips = () => ships;
//place ship object which contains the battleship as a property and an array of the coordinates.
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

    //create pure function to push coordinate to attempts. 
    //create pure function to remove cord from ships coordinate array. I think this could be in ship factory itself?
    

    return{placeShip,getShips,ships,receiveAttack,attempts}
}

export{ GameBoard }