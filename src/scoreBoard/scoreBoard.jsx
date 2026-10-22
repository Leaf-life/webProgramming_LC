import React from 'react';
import { useNavigate } from 'react-router-dom';
import './scoreBoard.css';
import {AuthState} from './../authState'

export function ScoreBoard({authState}) {
  const navigate = useNavigate();
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores')
    if (scoresText) {
      setScores(JSON.parse(scoresText))
    }
  }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  }else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <div>
      <header>
        <p>Score Board</p>
      </header>

      <main>
        <p>database for the stored scores will go here</p>
        <section>
          <tr>
            <li>user1 score1</li>
            <li>user2 score2</li>
            <li>user3 score3</li>
          </tr>
          <tbody>{scoreRows}</tbody>
        </section>
        <button type="button" className="nav-button" onClick={() => authState === AuthState.Authenticated ? navigate('/mode-selection'): navigate('/home')}>Back</button>
      </main>
    </div>
  );
}
