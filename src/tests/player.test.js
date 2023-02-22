import { GameBoard } from "../factories/gameboard";
import { Player } from "../factories/player";


test('gameBoard inside player',() => {

    const user = Player()


    expect(user.gameBoard.getShips()).toHaveLength(5)
    expect(user.gameBoard.getShips()[0].getName()).toBe('submarine')
    
    
    
    

})
