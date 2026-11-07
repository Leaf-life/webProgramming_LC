import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState, useAuthState } from './../authState';
import './scoreBoard.css';

export function ScoreBoard() {
  const navigate = useNavigate();
  const { authState } = useAuthState();
  const [scores, setScores] = React.useState([]);
  const [scoresError, setScoresError] = React.useState('');

  React.useEffect(() => {
    fetch('/api/scores')
      .then(async (response) => {
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('The scores API returned a non-JSON response. Check that the API server is running and that the app is using the configured Vite server.');
        }
        if (!response.ok) {
          const body = await response.json();
          throw new Error(body.msg || `Unable to fetch scores: ${response.status}`);
        }
        return response.json();
      })
      .then((receivedScores) => {
        if (!Array.isArray(receivedScores)) {
          console.error('Received scores are not an array.');
          setScores([]);
          return;
        }

        setScores(receivedScores.filter((score) =>
          score && typeof score.name === 'string' && Number.isFinite(score.score)
        ));
      })
      .catch((error) => {
        console.error('Unable to fetch scores.', error);
        setScoresError(error.message);
        setScores([]);
      });
  }, []);

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
              {scoresError ? (
                <tr>
                  <td colSpan="3">{scoresError}</td>
                </tr>
              ) : sortedScores.length ? sortedScores.map((score, index) => (
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
