const GameBoard = () => {
    //save ships as objects with cordinates I.E {ship,..cords}
    const ships = [];

    const placeShip = (ship,...coords) => {
        let cors = coords
        ships.push({ship,cors});
    }

    return{placeShip,ships}
}

export{ GameBoard }