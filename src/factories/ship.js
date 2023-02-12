const Ship = (length) => {
    let health = length; 
    
    const getHealth = () => health;
    const hit = () => {
        health = health - 1
        return health
    };

    const isSunk = () => {
        return health <= 0 ? true : false
    }

    return {hit, isSunk,getHealth}
}

export {Ship}