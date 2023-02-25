
const buildComputerBoard = (callBack,computerBoard) => {
    const main_container = document.getElementById('content-container');
    const enemyBoard = document.createElement('div');
    enemyBoard.id = 'enemy_board'
    enemyBoard.classList.add('grid','grid-cols-10','w-3/5','h-96')


    for (let i = 0; i < 100; i++) {
        const targetSpace = document.createElement('div')
        targetSpace.classList.add('border','border-black','targets')
        targetSpace.style.backgroundColor = 'blue'
        targetSpace.dataset.cord = `${i}`
        enemyBoard.appendChild(targetSpace);

        targetSpace.addEventListener('click',callBack)
        
    }
    main_container.appendChild(enemyBoard);
    setAttrbiutes(computerBoard)
};

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



function setAttrbiutes(gameboard){
    
    const nodeList = document.querySelectorAll('.targets')
    nodeList.forEach((target,index) => {
        target.dataset.status = gameboard[index]
        //target.innerText = gameboard[index]
    })
    
    
    
};

export { buildComputerBoard,renderComputerBoard }