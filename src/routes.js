import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Game from './pages/Game';
import CanvasExemple from './pages/CanvasExemple'
import TicTacToe from './pages/TicTacToe/Game'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/game/new" component={Game} />
        <Route path="/canvasExemple" component={CanvasExemple} />
        <Route path="/ticTacToe" component={TicTacToe} />
      </Switch>
    </BrowserRouter>
  );
}