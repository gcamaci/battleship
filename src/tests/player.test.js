import { Player } from "../factories/player";

test('player can attack enemy board', () => {
    //mock function of a gameBoard.
    //pretend we dont have gameBoard needed
    const gameBoard = {
        placeShip: jest.fn(),
        receiveAttack: jest.fn(),
        getShips: jest.fn(()=>[]),
        attempts: []
    }
});