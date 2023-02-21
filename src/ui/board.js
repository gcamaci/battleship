

const setInitialBoard = (() => {
    const main_container = document.getElementById('content-container');
    const enemyBoard = document.createElement('div');
    enemyBoard.id = 'enemy_board'
    enemyBoard.classList.add('grid','grid-cols-10','w-96','h-96')


    for (let i = 0; i < 100; i++) {
        const targetSpace = document.createElement('div')
        targetSpace.classList.add('border','border-black')
        targetSpace.innerText = i
        targetSpace.dataset.cord = `${i}`
        enemyBoard.appendChild(targetSpace);

        targetSpace.addEventListener('click', (e) => {
            console.log(e.target.dataset.cord);

        });
    }
    main_container.appendChild(enemyBoard);

})();


const renderBoard = (board) => {

}

export {setInitialBoard}