import React from 'react';
import './gameOver.css';

export function GameOver() {
  return (
    <div>
      <header><img src="GameOver.jpg" alt="game over image" /></header>
      <main>
        <p>API message goes here</p>
        <button type="button" onClick={() => window.location.href = 'modeSelection.html'}>Play Again</button>
        <button type="button" onClick={() => window.location.href = 'modeSelection.html'}>Return Home</button>
      </main>
    </div>
  );
}
