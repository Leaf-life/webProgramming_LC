import React from 'react';
import './playGameSingle.css';

export function PlayGameSingle() {
  return (
    <div>
      <header><img src="80/20.jpg" alt="80/20 image" /></header>
      <main>
        <button type="button">red button</button>
        <button type="button">green button</button>
        <div className="buttons" style={{ padding: '2%' }}>
          <button type="button" onClick={() => window.location.href = 'gameOver.html'}>quit</button>
        </div>
      </main>
    </div>
  );
}
