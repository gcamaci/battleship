import { Ship } from "../factories/ship";
import { GameBoard } from "../factories/gameboard";
//somehow test click event that takes 

test('format cordinate for place ship and attack function',() => {
    const playerBoard = GameBoard()

    expect(playerBoard.formatCord('57')).toStrictEqual([5,7])
    expect(playerBoard.formatCord('7')).toStrictEqual([0,7])
    expect(playerBoard.formatCord('0')).toStrictEqual([0,0])
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


test('places ship horizontal, wont go out of bounds',() => {
    const playerBoard = GameBoard()
    const submarine = Ship(3,'submarine');
    playerBoard.placeShip(submarine,'12')
    expect(playerBoard.getBoard()[1][2]).toBe('submarine')
    expect(playerBoard.getBoard()[1][3]).toBe('submarine')
    expect(playerBoard.getBoard()[1][4]).toBe('submarine')
    expect(playerBoard.getBoard()[1][5]).toBe(0)
    //expect(playerBoard.getBoard()[1][4]).toBe('submarine')
})

test('receive Attack from player, hit correct ship',() => {
    const playerBoard = GameBoard()
    const submarine = Ship(3,'submarine');
    playerBoard.placeShip(submarine,'12')
    expect(playerBoard.getShips()[0].getHealth()).toBe(3)
    expect(playerBoard.getBoard()[1][2]).toBe('submarine')
    expect(playerBoard.getBoard()[1][3]).toBe('submarine')
    expect(playerBoard.getBoard()[1][4]).toBe('submarine')
    playerBoard.receiveAttack('12') 
    expect(playerBoard.getShips()[0].getHealth()).toBe(2)
    expect(playerBoard.receiveAttack('13')).toBeTruthy()
    expect(playerBoard.getShips()[0].getHealth()).toBe(1)
    playerBoard.receiveAttack('14') 
    expect(playerBoard.getShips()[0].getHealth()).toBe(0)
    expect(playerBoard.receiveAttack('14')).toBeFalsy()
    expect(playerBoard.getShips()[0].getHealth()).toBe(0)
})