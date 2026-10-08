import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './login/signup';
import { ModeSelection } from './modeSelection/modeSelection';
import { Help } from './help/help';
import { ScoreBoard } from './scoreBoard/scoreBoard';
import { PlayGameSingle } from './playGameSingle/playGameSingle';
import { PlayGameMulti } from './playGameMulti/playGameMulti';
import { GameOver } from './gameOver/gameOver';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mode-selection" element={<ModeSelection />} />
          <Route path="/score-board" element={<ScoreBoard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/play-single" element={<PlayGameSingle />} />
          <Route path="/play-multi" element={<PlayGameMulti />} />
          <Route path="/game-over" element={<GameOver />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}