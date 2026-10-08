import React from 'react';
import { useNavigate } from 'react-router-dom';
import './playGameSingle.css';

export function PlayGameSingle() {
  const navigate = useNavigate();

  return (
    <div>
      <header><img src="80/20.jpg" alt="80/20 image" /></header>
      <main>
        <button type="button" className="redButton">red button</button>
        <button type="button" className="greenButton">green button</button>
        <div className="buttons" style={{ padding: '2%' }}>
          <button type="button" className="nav-button" onClick={() => navigate('/game-over')}>quit</button>
        </div>
      </main>
    </div>
  );
}
