import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gameOver.css';

export function GameOver() {
  const [joke, setJoke] = React.useState(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const controller = new AbortController();

    async function loadJoke() {
      try {
        const response = await fetch('/api/dad-joke', { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Dad joke request failed (${response.status})`);
        }

        const data = await response.json();
        setJoke(data.joke);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          console.error('Unable to load dad joke:', requestError);
          setError('Unable to load a joke right now.');
        }
      }
    }

    loadJoke();
    return () => controller.abort();
  }, []);

  return (
    <div>
      <header><img src="GameOver.jpg" alt="game over image" /></header>
      <main>
        <p>{error || joke || 'Loading a joke...'}</p>
        <button type="button" className="nav-button" onClick={() => navigate('/mode-selection')}>Return Home</button>
      </main>
    </div>
  );
}
