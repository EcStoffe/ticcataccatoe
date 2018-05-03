import React from 'react';

import {makeMove, newGame,} from '../logic';

import Tile from './tile';
import Message from "./message";


/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: newGame()
        }
    }
    playerMoved(i, value) {
        if (value === 1 || value === 2) return;
        if (this.state.game.winner) return;
        const newState = makeMove(this.state.game, i);
        this.setState({ game: newState });
    }

    resetGame() {
        this.setState (this.state.game = newGame());
    }

  render(){
    return (
        <div>
            <h2>TiccaTaccaToe</h2>
            <Message showCurrentGameMessage={this.state.game}/>
      <div className='board'>{this.state.game.board.map((tile, index) =>
          <Tile value={tile} win={this.state.game.line.includes(index)} playerMoved={() => this.playerMoved(index, tile)} />)}
      </div>
            <button onClick={() => this.resetGame()}>Reset</button>
        </div>
    );
  }
}

