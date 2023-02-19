import { GameBoard } from "../factories/gameboard";
import { Player } from "../factories/player";
import { Ship } from "../factories/ship";

test('gameBoard inside player?',() => {
    const player = Player(GameBoard());
    const ship = Ship(4,'submarine');

    player.gameBoard.placeShip(ship,'42');


    player.attack('42')
    

    expect(player.gameBoard.getBoard()[4][2]).toBe('submarine')
})
