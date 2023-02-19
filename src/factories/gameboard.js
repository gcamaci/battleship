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
        let [x,y] = formatCord(cord)
        //if ship is horizontal 
        if(ship.getPosition()){
            if(gameBoard[x].length - y < ship.length) return
            for (let i = 0; i < ship.length; i++){
                gameBoard[x][y + i] = ship.name
            }  
        } else {
            //vertical placement 
        }

        ships.push(ship)

    }

    const receiveAttack = (cord) => {
        if (attempts.includes(cord)) return
        let hit = false;
        let [x,y] = formatCord(cord)
        //missed
        if (gameBoard[x][y] === 0){
            gameBoard[y][y] = 'X'
            
        } else {
            ships.forEach((ship) => {
                if (gameBoard[x][y] === ship.name){
                    ship.hit()
                    hit = true
                }
            })

        }
        attempts.push(cord)
        return hit
    }

    function formatCord(cord){
        const zeroTest = parseInt(cord);
        const cord_array = cord.split('').map((num)=>parseInt(num))

        if (zeroTest < 10){
            cord_array[1] = cord_array[0]
            cord_array[0] = 0; 
        }
        return cord_array
    }
    //create pure function to push coordinate to attempts. 
    //create pure function to remove cord from ships coordinate array. I think this could be in ship factory itself?
    
    const getBoard = () => gameBoard;
    const getShips = () => ships;
    return{placeShip,getShips,ships,receiveAttack,getBoard,formatCord}
}

export{ GameBoard }