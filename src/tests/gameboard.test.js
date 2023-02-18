import { Ship } from "../factories/ship";
import { GameBoard } from "../factories/gameboard";
//somehow test click event that takes 

test('format cordinate for place ship and attack function',() => {
    
})

test('test initial gameboard', () => {
    const playerBoard  = GameBoard().getBoard()
    expect(playerBoard).toHaveLength(10)
    //check if there is 100 cells in the 2D gameboard array
    const numCells = playerBoard.reduce((total, row) => total + row.length, 0);
    expect(numCells).toBe(100)

});