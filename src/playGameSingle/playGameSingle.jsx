import React from 'react';
import { useNavigate } from 'react-router-dom';
import './playGameSingle.css';

export function PlayGameSingle() {
  const navigate = useNavigate();
  const [score, setScore] = React.useState(0);
  const [selectedButton, setSelectedButton] = React.useState(() => getRandomButton());

  function getRandomButton() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(5);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  function gameOver() {
    const userScore = {
      name: localStorage.getItem('userName') || 'Unknown',
      score,
    };
    const scoresText = localStorage.getItem('scores');
    let previousScores = [];

    if (scoresText) {
      try {
        const parsedScores = JSON.parse(scoresText);
        if (Array.isArray(parsedScores)) {
          previousScores = parsedScores;
        }
      } catch (error) {
        console.error('Unable to read saved scores; starting a new score list.', error);
      }
    }

    localStorage.setItem('scores', JSON.stringify([...previousScores, userScore]));
    navigate('/game-over');
  }

  function chooseButton(button) {
    if (selectedButton === button) {
      gameOver();
      return;
    }

    setScore((currentScore) => currentScore + 1);
    setSelectedButton(getRandomButton());
  }

  return (
    <div>
      <header><img src="80/20.jpg" alt="80/20 image" /></header>
      <main>
        <p>Score: {score}</p>
        <button type="button" className="redButton" onClick={() => chooseButton(1)}>red button</button>
        <button type="button" className="greenButton" onClick={() => chooseButton(2)}>green button</button>
        <button type="button" className="blueButton" onClick={() => chooseButton(3)}>blue button</button>
        <button type="button" className="purpleButton" onClick={() => chooseButton(4)}>purple button</button>
        <button type="button" className="yellowButton" onClick={() => chooseButton(5)}>yellow button</button>
        <div className="buttons" style={{ padding: '2%' }}>
          <button type="button" className="nav-button" onClick={() => gameOver()}>quit</button>
        </div>
      </main>
    </div>
  );
}
