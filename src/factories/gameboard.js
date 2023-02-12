const GameBoard = () => {
    //save ships as objects with cordinates I.E {ship,..cords}
    const ships = [];

    const placeShip = (ship,...coords) => {
        ships.push({ship,})
    }

    return{placeShip}
}