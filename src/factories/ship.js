const Ship = (length,shipType) => {
    let horizantal = true
    let health = length; 
    const name = shipType
    const getHealth = () => health;
    
    const hit = () => {
        if(isSunk()) return
        health = health - 1
        return health
    };

    const isSunk = () => {
        return health <= 0 ? true : false
    }
    const getPosition = () => horizantal
    const togglePosition = () => {
        if (horizantal){
            horizantal = false
        } else {
            horizantal = true
        }
        
    }
    return {hit, isSunk,getHealth,name,getPosition,togglePosition}
}

export {Ship}