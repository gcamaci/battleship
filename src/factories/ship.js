const Ship = (length) => {
    let horizantal = true
    let health = length; 
    
    const getHealth = () => health;
    const getName = () => {
        let name;
        switch(length){
            case 2:
                name = 'submarine'
                break;
            case 3:
                name = 'sail'
                break;
            case 4:
                name = 'navy'
                break;
            case 5:
                name = 'battleship'
                break;
            case 6:
                name = 'destroyer'
                break;   
        }
        return name
    }
    const hit = () => {
        if(isSunk()) return true
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
    return {hit, isSunk,getHealth,getName,getPosition,togglePosition,length}
}

export {Ship}