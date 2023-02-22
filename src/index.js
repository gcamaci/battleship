import style from './style.css'
import { setInitialBoard } from './ui/board'
import { Player } from './factories/player'
import { setAttrbiutes } from './ui/board';
const computer = Player();
const user = Player();

const targets_nodes = document.querySelectorAll('.targets')

console.log(computer.gameBoard.getBoard())

computer.gameBoard.placeShip(computer.gameBoard.getShips()[0],'4')
computer.gameBoard.placeShip(computer.gameBoard.getShips()[1],'40')
computer.gameBoard.placeShip(computer.gameBoard.getShips()[2],'32')
computer.gameBoard.placeShip(computer.gameBoard.getShips()[3],'95')
computer.gameBoard.placeShip(computer.gameBoard.getShips()[4],'64')


user.attack('95', computer)

console.log(setAttrbiutes(computer.gameBoard.getBoard()))


function makeMove(){

}