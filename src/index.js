import style from './style.css'
import { setInitialBoard } from './ui/board'
import { Player } from './factories/player'

const user = Player();



console.log(user.gameBoard.getBoard())