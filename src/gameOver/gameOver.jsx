import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gameOver.css';

export function GameOver() {
  const navigate = useNavigate();

  return (
    <div>
      <header><img src="GameOver.jpg" alt="game over image" /></header>
      <main>
        <p>API message goes here</p>
        <button type="button" className="nav-button" onClick={() => navigate('/mode-selection')}>Play Again</button>
        <button type="button" className="nav-button" onClick={() => navigate('/mode-selection')}>Return Home</button>
      </main>
    </div>
  );
}
