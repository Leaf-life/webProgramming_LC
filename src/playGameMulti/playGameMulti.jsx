import React from 'react';
import './playGameMulti.css';

export function PlayGameMulti() {
  return (
    <div>
      <header>
        <div className="title-img">
          <img src="8020Title.png" alt="80/20 image" />
        </div>
      </header>
      <main>
        <p style={{ color: 'antiquewhite' }}>webSocket goes here</p>
        <div className="buttons">
          <button type="button">red button</button>
          <button type="button">green button</button>
        </div>
        <div className="buttons" style={{ padding: '2%' }}>
          <button type="button" onClick={() => window.location.href = 'gameOver.html'}>quit</button>
        </div>
      </main>
    </div>
  );
}
