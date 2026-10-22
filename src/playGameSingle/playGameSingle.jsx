import React from 'react';
import { useNavigate } from 'react-router-dom';
import './playGameSingle.css';

export function PlayGameSingle() {
  const navigate = useNavigate();

  function getRandomButton() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(5);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const selectedButton = getRandomButton()

  return (
    <div>
      <header><img src="80/20.jpg" alt="80/20 image" /></header>
      <main>
          <button type="button" className="redButton" onClick={() => navigate(selectedButton === 1 ? '/game-over' : '/play-single')}>red button</button>
          <button type="button" className="greenButton" onClick={() => navigate(selectedButton === 2 ? '/game-over' : '/play-single')}>green button</button>
          <button type="button" className="redButton" onClick={() => navigate(selectedButton === 3 ? '/game-over' : '/play-single')}>blue button</button>
          <button type="button" className="greenButton" onClick={() => navigate(selectedButton === 4 ? '/game-over' : '/play-single')}>purple button</button>
          <button type="button" className="redButton" onClick={() => navigate(selectedButton === 5 ? '/game-over' : '/play-single')}>yellow button</button>
        <div className="buttons" style={{ padding: '2%' }}>
          <button type="button" className="nav-button" onClick={() => navigate('/game-over')}>quit</button>
        </div>
      </main>
    </div>
  );
}
