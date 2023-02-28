import { buildComputerBoard, buildPlayerBoards } from "./board";
import { GameController } from "../factories/gameLogic";



const renderPlaceBoard = () => {
    const userBoard = GameController.user.getFlatBoard()
    const nodes = document.querySelectorAll('.user-spaces')

    userBoard.forEach((cell,index) => {
        if(cell !== 0 && cell !== 1 && cell !== 'X'){
            nodes[index].style.backgroundColor = 'black'
        }else{
            nodes[index].style.backgroundColor = 'blue'
        }
        
    });


}

const initialBoard = () => {
    const main = document.getElementById('content-container');
    const userBoard = document.createElement('div')
    userBoard.id = 'user_board'
    userBoard.classList.add('grid','grid-cols-10','w-3/5','h-96')
    for ( let i = 0; i < 100; i++ ) {
        const cell = document.createElement('div')
        cell.classList.add('border','border-black','user-spaces')
        cell.dataset.cord = `${i}`
        cell.addEventListener('click',(event) => {
            GameController.user.placeUserShip(event)
            renderPlaceBoard()
        })
        userBoard.appendChild(cell)

    }
    main.appendChild(userBoard)
    positionButton()
}
const positionButton = () => {
    const main = document.getElementById('content-container')
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('flex','gap-2')
    const button = document.createElement('button')
    button.type = 'button'
    button.innerText = 'Position'
    button.classList.add('border','border-black','h-12')
    button.addEventListener('click',GameController.user.switchPlaceDirection)
    

    const playButton = document.createElement('button')
    playButton.id = 'play_button'
    playButton.innerText = 'Play'
    playButton.classList.add('border','border-black','h-12')
    playButton.addEventListener('click',() => {
        buildPlayerBoards(
            GameController.playRound(event),
            GameController.computer.getFlatBoard(),
            GameController.user.getFlatBoard()

        )
    })


    buttonContainer.append(button,playButton)
    main.appendChild(buttonContainer)

}


export{initialBoard}