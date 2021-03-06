import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Game from './pages/Game';
import CanvasExemple from './pages/CanvasExemple'
import TicTacToe from './pages/TicTacToe/Game'
import Snake from './pages/Snake/App'
import Drawing from './pages/Drawing/App'
import DragRectangle from './pages/DragRectangle/App'
import CardsComponents from './pages/CardsComponents'
import DrawHooks from './pages/DrawHooks/App'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/game/new" component={Game} />
        <Route path="/canvasExemple" component={CanvasExemple} />
        <Route path="/ticTacToe" component={TicTacToe} />
        <Route path="/snake" component={Snake} />
        <Route path="/drawing" component={Drawing} />
        <Route path="/dragRectangle" component={DragRectangle} />
        <Route path="/cardsComponents" component={CardsComponents} />
        <Route path="/drawHooks" component={DrawHooks} />
      </Switch>
    </BrowserRouter>
  );
}