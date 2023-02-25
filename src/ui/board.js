//going to build both boards after user initializes ship placement

const buildComputerBoard = (callBack,computerBoard,userGameboard) => {
    const main_container = document.getElementById('content-container');
    const userBoard = document.createElement('div')
    const enemyBoard = document.createElement('div');
    enemyBoard.id = 'enemy_board'
    enemyBoard.classList.add('grid','grid-cols-10','w-3/5','h-96')//enemyboard tw style
    userBoard.id = 'user_board'
    userBoard.classList.add('grid','grid-cols-10','w-3/5','h-96')// user board TW


    for (let i = 0; i < 100; i++) {
        const computerTarget = document.createElement('div')
        computerTarget.classList.add('border','border-black','targets')
        computerTarget.style.backgroundColor = 'blue'
        computerTarget.dataset.cord = `${i}`
        enemyBoard.appendChild(computerTarget);
        computerTarget.addEventListener('click',callBack);
        
        const userTarget = document.createElement('div');
        userTarget.classList.add('border','border-black','user-target');
        userTarget.style.backgroundColor = 'blue'
        userTarget.dataset.cord = `${i}`
        userTarget.innerText = userGameboard[i]
        userBoard.appendChild(userTarget)
        

        
    }
    main_container.append(userBoard,enemyBoard);
    setAttrbiutes(computerBoard)
};
//come back to this, make it render both boards at once
const renderComputerBoard = (computer) => {
    const targetList = document.querySelectorAll('.targets');
    const flatBoard = computer.getFlatBoard()
    console.log(flatBoard)
    
    for (let i = 0; i < targetList.length; i++){
        if(flatBoard[i] === 0){
            targetList[i].style.backgroundColor = 'blue'

        } else if (flatBoard[i] === 1){
            targetList[i].style.backgroundColor = 'green'
        } else if(flatBoard[i] === 'X' ){
            targetList[i].style.backgroundColor ='red'
        } else {
            targetList[i].style.backgroundColor = 'blue'
        }
        
    }
   
}
const initialUserBoard = () => {
    const enemyBoard = document.createElement('div');
    

}


function setAttrbiutes(gameboard){
    
    const nodeList = document.querySelectorAll('.targets')
    nodeList.forEach((target,index) => {
        target.dataset.status = gameboard[index]
        //target.innerText = gameboard[index]
    })
    
    
    
};

export { buildComputerBoard,renderComputerBoard }