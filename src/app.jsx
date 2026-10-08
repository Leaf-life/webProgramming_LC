import React from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';

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
        <Navigation />
            <nav className="buttons">
                <NavLink to="/login" className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}>
                    Login
                </NavLink>
                <NavLink to="/signup" className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}>
                    Sign up
                </NavLink>
                <NavLink to="/score-board" className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}>
                    Score Board
                </NavLink>
                <NavLink to="/help" className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}>
                    Help Page
                </NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mode-selection" element={<ModeSelection />} />
                <Route path="/score-board" element={<ScoreBoard />} />
                <Route path="/help" element={<Help />} />
                <Route path="/play-single" element={<PlayGameSingle />} />
                <Route path="/play-multi" element={<PlayGameMulti />} />
                <Route path="/game-over" element={<GameOver />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
      </main>
    </BrowserRouter>
  );
}