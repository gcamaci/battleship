const GameBoard = () => {
    const ships = [];
    const attempts = []
    const getShips = () => ships;
//place ship object which contains the battleship as a property and an array of the coordinates.
    const placeShip = (ship,...coords) => {
        let cors = coords
        ships.push({ship,cors});
    }

    const shipsAreSunk = ships.every((ship) => ship.ship.isSunk());

    const receiveAttack = (cord) => {
        if (attempts.includes(cord)) return

        let hit = false;

        for (let i = 0; i < ships.length; i++) {
            const ship = ships[i];
            for (let j = 0; j < ship.cors.length; j++) {
                if (ship.cors[j]===cord){
                    ship.ship.hit()
                    hit = true;
                    break;
                }
            }
            if (hit) {
                break;
            }
        }
        if(!hit){
            attempts.push(cord)
        }

        if(allShipsSunk) {
            return "Game Over"
        }

        attempts.push(cord)
       
    }




    //create pure function to push coordinate to attempts. 
    //create pure function to remove cord from ships coordinate array. I think this could be in ship factory itself?
    

    return{placeShip,getShips,ships,receiveAttack,attempts}
}

export{ GameBoard }