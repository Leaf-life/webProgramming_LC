import React from 'react';
import './modeSelection.css';

export function ModeSelection() {
  return (
    <div>
      <header>
        <p>Select game mode</p>
      </header>
      <main>
        <button type="button" onClick={() => window.location.href = 'playGameSingle.html'}>single</button>
        <button type="button" onClick={() => window.location.href = 'playGameMulti.html'}>multi</button>
        <button type="button" onClick={() => window.location.href = 'scoreBoard.html'}>Score Board</button>
        <button type="button" onClick={() => window.location.href = 'help.html'}>Help Page</button>
        <button type="button" onClick={() => window.location.href = 'index.html'}>logout</button>
      </main>
    </div>
  );
}
