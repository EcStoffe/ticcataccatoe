/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';


export default function Message(props)  {

    let currentMessage;
    const gameMessage = {

    player1: "It is player 1's turn to play",
    player2: "It is player 2's turn to play",
    player1Won: "Game over, the first player won",
    player2Won: "Game over, the second player won",
    draw: "Game over, nobody won"

    };

if (props.showCurrentGameMessage.board.includes(0) === false) {
    currentMessage = gameMessage.draw
    }
    else {
        if (props.showCurrentGameMessage.player === 'plr1') {
            currentMessage = gameMessage.player1
        }
        else {
            currentMessage = gameMessage.player2
        }
}

return (
    <div>
        {currentMessage}
    </div>
)};






