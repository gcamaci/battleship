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
    const allShipSunk = () => {
        return ships.every((ship) => ship.isSunk());
    }    
//place ship object which contains the battleship as a property and an array of the coordinates.
    const placeShip = (ship,cord) => {
        let placed = false;
        let [x,y] = formatCord(cord)
        //if ship is horizontal 
        if(ship.getPosition()){
            if(gameBoard[x].length - y < ship.length) return
            for (let i = 0; i < ship.length; i++){
                gameBoard[x][y + i] = ship.getName()
                placed = true;
            }
        }
        else{
            if (10 - x < ship.length) return
            for (let i = 0; i < ship.length; i++){
                gameBoard[x + i][y] = ship.getName()
                placed = true;
            }
        }
        
        return placed
    }   
    

    const randomShipPlacement = () => {
        //generate random number
        //check if number is a valid placement
        //valid placement should consider the ships position (vertical/horizantal)

        ships.forEach((ship) => {
            //if checkValidSpots(cord,ship.length,ship.position)===true

        });
       
    }
    //records attempts, returns if hit.
    const receiveAttack = (cord) => {
        if (attempts.includes(cord)) return
        let hit = false;
        let [x,y] = formatCord(cord)
        let targetShip;

        if (gameBoard[x][y] === 0){
            gameBoard[x][y] = 'X'
            
        } else {
            //hit proper ship in ships array
            ships.forEach((ship) => {
                if (gameBoard[x][y] === ship.getName()){
                    ship.hit()
                    hit = true;
                    targetShip = ship
                    gameBoard[x][y] = 1
                    if (ship.isSunk()) {
                        //do something when ship is sunk 
                        console.log(`Youve sunk enemy${ship.getName()}`)
                        
                    }
                }
            })  
        }
        attempts.push(cord)
        return [hit, targetShip]
    }

    function formatCord(cord){
        const cord_array = cord.split('').map((num)=>parseInt(num))
        const zeroTest = parseInt(cord);
        if (zeroTest < 10){
            cord_array[1] = cord_array[0]
            cord_array[0] = 0; 
        }
        return cord_array
    }
    const checkValidTarget = (cord,length,position) => {
        let valid = false
        let count = 0
        const [x,y] = formatCord(cord)
        if (position) {
            let horizantalDistance = gameBoard[x].length - y 
            if(length > horizantalDistance) return 
            for (let i = 0; i < length; i++){
                if(gameBoard[x][y + i] === 0){
                    count = count + 1
                }     
            }
        } else {
            let verticalDistance = 10 - x;
            if(length > verticalDistance) return
            for (let i = 0 ; i < length; i++){
                if(gameBoard[x + i][y] === 0){
                    count = count + 1
                }
            }
        }

        if(count === length) {
            valid = true
        }
        
        return valid



    };
    const getBoard = () => gameBoard;
    const getShips = () => ships;
    return{placeShip,getShips,receiveAttack,getBoard,formatCord,allShipSunk,checkValidTarget}
}

export{ GameBoard }