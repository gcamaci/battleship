import { buildPlayerBoards } from "./board";
import { GameController } from "../factories/gameLogic";



const renderPlaceBoard = () => {
    const userBoard = GameController.user.getFlatBoard()
    const nodes = document.querySelectorAll('.user-spaces')

    userBoard.forEach((cell,index) => {
        nodes[index].classList.remove('bg-yellow-300')
        if(cell !== 0 && cell !== 1 && cell !== 'X'){
            nodes[index].style.backgroundColor = '#01B636'
        }/*else{
            nodes[index].style.backgroundColor = 'blue'
        }
        */
    });


}

const hoverHighlight = (event) => {
    if(GameController.user.placementStatus()) return
    let cord = parseInt(event.target.dataset.cord)
    const nodes = document.querySelectorAll('.user-spaces')
    const currentShip = GameController.user.getCurrentShip()
    nodes.forEach((node)=>{
        node.classList.remove('bg-[#3BD16F]')
    })
    for (let i = 0; i < currentShip.length; i++){
        let node = nodes[cord]
        node.classList.add('bg-[#3BD16F]')
        if(currentShip.getPosition()){
            cord = cord + 1
        }else{
            cord = cord + 10
        }
    }
   

    //const flatBoard = GameController.user.getFlatBoard()
    

    
}
const menuHeader = () => {
    const header = document.createElement('div')
    const title = document.createElement('h2')
    header.classList.add('flex','justify-center')
    title.innerText = 'Place your ships and click play when ready'

    header.appendChild(title)
    return header
}

const buildButtons = () => {
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('flex','gap-4','justify-center')
    buttonContainer.id = 'button_container'
    const button = document.createElement('button')
    button.type = 'button'
    button.innerText = 'Position'
    button.classList.add('border','border-[#01B636]','w-20')
    button.addEventListener('click',GameController.user.switchPlaceDirection)
    

    const playButton = document.createElement('button')
    playButton.id = 'play_button'
    playButton.innerText = 'Play'
    playButton.classList.add('border','border-[#01B636]','w-20')
    playButton.addEventListener('click',() => {
        buildPlayerBoards(
            GameController.playRound,
            GameController.computer.getFlatBoard(),
            GameController.user.getFlatBoard()

        )
    })


    buttonContainer.append(button,playButton)
    return buttonContainer

}
const initialBoard = () => {
    const boardContainer = document.createElement('div')
    boardContainer.classList.add('w-1/2','flex','justify-center')
    const userBoard = document.createElement('div')
    userBoard.id = 'user_board'
    userBoard.classList.add('grid','grid-cols-10','h-[500px]','w-[500px]',)
    for ( let i = 0; i < 100; i++ ) {
        const cell = document.createElement('div')
        cell.classList.add('border','border-[#01B636]','user-spaces')
        cell.dataset.cord = `${i}`
        cell.addEventListener('click',(event) => {
            GameController.user.placeUserShip(event)
            renderPlaceBoard()

        })


        cell.addEventListener('mouseover',hoverHighlight)
        //addEventListener('mouseout',renderPlaceBoard)
        
        userBoard.appendChild(cell)

    }
    userBoard.addEventListener('mouseout',renderPlaceBoard)
    boardContainer.appendChild(userBoard)
    return boardContainer
    //positionButton()
}

const initialLoad = () =>{
    const main = document.getElementById('content-container')
    const menuSection = document.createElement('div')
    menuSection.classList.add('w-1/2', 'flex','flex-col','justify-center','gap-4')
    const header = menuHeader()
    const board = initialBoard()
    const buttons = buildButtons()

    menuSection.append(header,buttons)
    main.append(board,menuSection)
    
}
export{initialLoad}