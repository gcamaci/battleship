import style from './style.css'
/*
import { GameBoard } from './factories/gameboard'

const initialGameboard = (() => {
    const container = document.getElementById('player_board')

    for (let i = 0; i < 100; i++){
        const targetSection = document.createElement('div')
        targetSection.dataset.cord = `${i}`
        targetSection.classList.add('target')
        targetSection.innerText = i;



        

        targetSection.addEventListener('click', (e)=>{
            const player = GameBoard()
            player.placeShip(e.target.dataset.cord)
        })

        container.appendChild(targetSection)

    }
})()
*/