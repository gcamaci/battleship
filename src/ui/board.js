
const buildComputerBoard = (callBack,computerBoard) => {
    const main_container = document.getElementById('content-container');
    const enemyBoard = document.createElement('div');
    enemyBoard.id = 'enemy_board'
    enemyBoard.classList.add('grid','grid-cols-10','w-3/5','h-96')


    for (let i = 0; i < 100; i++) {
        const targetSpace = document.createElement('div')
        targetSpace.classList.add('border','border-black','targets')
        targetSpace.innerText = i
        targetSpace.dataset.cord = `${i}`
        enemyBoard.appendChild(targetSpace);

        targetSpace.addEventListener('click',callBack)
        
    }
    main_container.appendChild(enemyBoard);
    setAttrbiutes(computerBoard)


};



function setAttrbiutes(gameboard){
    
    const nodeList = document.querySelectorAll('.targets')
    nodeList.forEach((target,index) => {
        target.dataset.status = gameboard[index]
        target.innerText = gameboard[index]
    })
    
    
    
};

export { buildComputerBoard }