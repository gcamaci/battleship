

const setInitialBoard = (() => {
    const main_container = document.getElementById('content-container');
    const enemyBoard = document.createElement('div');
    enemyBoard.id = 'enemy_board'

    for (let i = 0; i < 00; i++) {
        const targetSpace = document.createElement('div')
        targetSpace.innerText = i
        targetSpace.dataset.cord = `${i}`
        enemyBoard.appendChild(targetSpace);
    }
    main_container.appendChild(enemyBoard);

})();


