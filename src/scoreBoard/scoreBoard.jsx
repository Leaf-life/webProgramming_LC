import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState, useAuthState } from './../authState';
import './scoreBoard.css';

export function ScoreBoard() {
  const navigate = useNavigate();
  const { authState } = useAuthState();
  const [scores] = React.useState(() => {
    const scoresText = localStorage.getItem('scores');
    if (!scoresText) {
      return [];
    }

    try {
      const parsedScores = JSON.parse(scoresText);
      if (!Array.isArray(parsedScores)) {
        console.error('Saved scores are not an array.');
        return [];
      }

      return parsedScores.filter((score) =>
        score && typeof score.name === 'string' && Number.isFinite(score.score)
      );
    } catch (error) {
      console.error('Unable to parse saved scores.', error);
      return [];
    }
  });
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);

  return (
    <div>
      <header>
        <p>Score Board</p>
      </header>

      <main>
        <section>
          <table>
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedScores.length ? sortedScores.map((score, index) => (
                <tr key={`${score.name}-${index}`}>
                  <td>{index + 1}</td>
                  <td>{score.name.split('@')[0]}</td>
                  <td>{score.score}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="3">Be the first to score</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <button
          type="button"
          className="nav-button"
          onClick={() => navigate(authState === AuthState.Authenticated ? '/mode-selection' : '/home')}
        >
          Back
        </button>
      </main>
    </div>
  );
}
