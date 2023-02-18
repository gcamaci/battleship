import { Ship } from "../factories/ship";
import { GameBoard } from "../factories/gameboard";
//somehow test click event that takes 

test('format cordinate for place ship and attack function',() => {
    const playerBoard = GameBoard()

    expect(playerBoard.formatCord('57')).toStrictEqual([5,7])

})

test('test initial gameboard', () => {
    const playerBoard  = GameBoard().getBoard()
    expect(playerBoard).toHaveLength(10)
    //check if there is 100 cells in the 2D gameboard array
    const numCells = playerBoard.reduce((total, row) => total + row.length, 0);
    expect(numCells).toBe(100)

});

test('places Ship on correct cordinate', () => {
    const playerBoard = GameBoard()
    const submarine = Ship(3,'submarine');
    playerBoard.placeShip(submarine,'17')
    expect(playerBoard.getBoard()[1][7]).toBe('submarine')
});