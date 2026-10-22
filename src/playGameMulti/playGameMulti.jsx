import React from 'react';
import { useNavigate } from 'react-router-dom';
import './playGameMulti.css';

export function PlayGameMulti() {
  const navigate = useNavigate();

  function getRandomButton() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(5);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const selectedButton = getRandomButton()

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
          <button type="button" className="redButton" onClick={() => navigate(selectedButton === 1 ? '/game-over' : '/play-multi')}>red button</button>
          <button type="button" className="greenButton" onClick={() => navigate(selectedButton === 2 ? '/game-over' : '/play-multi')}>green button</button>
          <button type="button" className="redButton" onClick={() => navigate(selectedButton === 3 ? '/game-over' : '/play-multi')}>blue button</button>
          <button type="button" className="greenButton" onClick={() => navigate(selectedButton === 4 ? '/game-over' : '/play-multi')}>purple button</button>
          <button type="button" className="redButton" onClick={() => navigate(selectedButton === 5 ? '/game-over' : '/play-multi')}>yellow button</button>
        </div>
        <div className="buttons" style={{ padding: '2%' }}>
          <button type="button" className="nav-button" onClick={() => navigate('/game-over')}>quit</button>
        </div>
      </main>
    </div>
  );
}
