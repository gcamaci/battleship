const GameBoard = () => {
    const gameBoard = []
    const attempts = []
    const ships = []

    const initializeGameboard = (()=>{
        for (let i = 0; i < 10; i++){
            gameBoard[i] = []
            for (let j = 0; j < 10; j++){
                gameBoard[i][j] = 0;
            }
        }
    })()
    const shipsAreSunk = ships.every((ship) => ship.ship.isSunk());

//place ship object which contains the battleship as a property and an array of the coordinates.
    const placeShip = (ship,cord) => {
        const [x,y] = formatCord(cord)
        


    }

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

        if(shipsAreSunk) {
            return "Game Over"
        }

        attempts.push(cord)
       
    }



    function formatCord(cord){
        return cord.split('').map((num)=>parseInt(num))
    }
    //create pure function to push coordinate to attempts. 
    //create pure function to remove cord from ships coordinate array. I think this could be in ship factory itself?
    
    const getBoard = () => gameBoard;
    const getShips = () => ships;
    return{placeShip,getShips,ships,receiveAttack,getBoard}
}

export{ GameBoard }