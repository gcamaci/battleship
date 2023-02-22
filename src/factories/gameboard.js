import { Ship } from "./ship"

const GameBoard = () => {
    const gameBoard = []
    const attempts = []
    const ships = [Ship(2),Ship(3),Ship(4),Ship(5),Ship(6)]

    const initializeGameboard = (()=>{
        for (let i = 0; i < 10; i++){
            gameBoard[i] = []
            for (let j = 0; j < 10; j++){
                gameBoard[i][j] = 0;
            }
        }
    })()
    const shipsAreSunk = ships.every((ship) => ship.isSunk());

//place ship object which contains the battleship as a property and an array of the coordinates.
    const placeShip = (ship,cord) => {
        let placed = false;
        let [x,y] = formatCord(cord)
        //if ship is horizontal 
        if(ship.getPosition()){
            if(gameBoard[x].length - y < ship.length) return placed
            for (let i = 0; i < ship.length; i++){
                gameBoard[x][y + i] = ship.getName()
                placed = true;
            }  
        } else {
            //vertical placement 
        }
        return placed
    }



    
    //records attempts, returns if hit.
    const receiveAttack = (cord) => {
        if (attempts.includes(cord)) return
        let hit = false;
        let [x,y] = formatCord(cord)
        
        if (gameBoard[x][y] === 0){
            gameBoard[y][y] = 'X'
            
        } else {
            //hit proper ship in ships array
            ships.forEach((ship) => {
                if (gameBoard[x][y] === ship.getName()){
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
    const getBoard = () => gameBoard;
    const getShips = () => ships;
    return{placeShip,getShips,receiveAttack,getBoard,formatCord}
}

export{ GameBoard }