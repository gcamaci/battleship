const Ship = (length) => {
    let health = length; 
    
    const getHealth = () => health;
    
    const hit = () => {
        if(isSunk()) return
        health = health - 1
        return health
    };

    const isSunk = () => {
        return health <= 0 ? true : false
    }

    return {hit, isSunk,getHealth}
}

export {Ship}