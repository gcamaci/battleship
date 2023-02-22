

const setInitialBoard = (() => {
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

        targetSpace.addEventListener('click', (event) => {
            console.log(targetSpace.dataset.cord)
            console.log(targetSpace.dataset.status)
        })
    }
    main_container.appendChild(enemyBoard);

})();



const setAttrbiutes = (gameboard) => {
    let attribute_values = gameboard.flat()
    const nodeList = document.querySelectorAll('.targets')
    nodeList.forEach((target,index) => {
        target.dataset.status = attribute_values[index]
        target.innerText = attribute_values[index]
    })
    
    return attribute_values
    
};

export {setInitialBoard,setAttrbiutes}