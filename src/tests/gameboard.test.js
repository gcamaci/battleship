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
    const sail = Ship(3);
    playerBoard.placeShip(sail,'17')
    expect(playerBoard.getBoard()[1][7]).toBe('sail')
});


test('places ship horizontal, wont go out of bounds',() => {
    const playerBoard = GameBoard()
    const submarine = Ship(2);
    playerBoard.placeShip(submarine,'12')
    expect(playerBoard.getBoard()[1][2]).toBe('submarine')
    expect(playerBoard.getBoard()[1][3]).toBe('submarine')
    expect(playerBoard.getBoard()[1][4]).toBe(0)
    //expect(playerBoard.getBoard()[1][4]).toBe('submarine')
})

test('receive Attack from player, hit correct ship',() => {
    const playerBoard = GameBoard()
    const submarine = Ship(4);
    playerBoard.placeShip(submarine,'12')
    //expect(playerBoard.getShips()[0].getHealth()).toBe(3)
    expect(playerBoard.getBoard()[1][2]).toBe('navy')
    expect(playerBoard.getBoard()[1][3]).toBe('navy')
    expect(playerBoard.getBoard()[1][4]).toBe('navy')
    expect(playerBoard.getBoard()[1][5]).toBe('navy')

    //may need to change receive attack function

    
    playerBoard.receiveAttack('12') 
    expect(playerBoard.getShips()[2].getHealth()).toBe(3)
    expect(playerBoard.receiveAttack('13')).toBeTruthy()
    expect(playerBoard.getShips()[2].getHealth()).toBe(2)
    playerBoard.receiveAttack('14') 
    expect(playerBoard.getShips()[2].getHealth()).toBe(1)
    expect(playerBoard.receiveAttack('14')).toBeFalsy()
    expect(playerBoard.getShips()[2].getHealth()).toBe(1) 
    expect(playerBoard.receiveAttack('15')).toBeTruthy();
    expect(playerBoard.receiveAttack('15')).toBeFalsy()
    expect(playerBoard.getShips()[2].getHealth()).toBe(0)

})

test('check valid Target', () => {
    const gameBoard = GameBoard()
    expect(gameBoard.getShips()).toHaveLength(5)
    gameBoard.getShips()[3].togglePosition()
    expect(gameBoard.getShips()[3].getPosition()).toBeFalsy()
    gameBoard.placeShip(gameBoard.getShips()[3],'33')
    gameBoard.placeShip(gameBoard.getShips()[4],'12')
    //Horizantal placement
    expect(gameBoard.getBoard()[1][2]).toBe('destroyer')
    expect(gameBoard.getBoard()[1][3]).toBe('destroyer')
    expect(gameBoard.getBoard()[1][4]).toBe('destroyer')
    expect(gameBoard.getBoard()[1][5]).toBe('destroyer')
    expect(gameBoard.getBoard()[1][6]).toBe('destroyer')
    expect(gameBoard.getBoard()[1][7]).toBe('destroyer')

    //vertical placement
    expect(gameBoard.getBoard()[3][3]).toBe('battleship')
    expect(gameBoard.getBoard()[4][3]).toBe('battleship')
    expect(gameBoard.getBoard()[5][3]).toBe('battleship')
    expect(gameBoard.getBoard()[6][3]).toBe('battleship')
    expect(gameBoard.getBoard()[7][3]).toBe('battleship')

    

    expect(gameBoard.checkValidTarget('14',6,true)).toBeFalsy();
    expect(gameBoard.checkValidTarget('44',6,true)).toBeTruthy();
    
    expect(gameBoard.checkValidTarget('33',5,false)).toBeFalsy()

})