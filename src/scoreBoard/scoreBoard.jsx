import React from 'react';
import { useNavigate } from 'react-router-dom';
import './scoreBoard.css';

export function ScoreBoard() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <p>Score Board</p>
      </header>

      <main>
        <p>database for the stored scores will go here</p>
        <section>
          <ul>
            <li>user1 score1</li>
            <li>user2 score2</li>
            <li>user3 score3</li>
          </ul>
        </section>
        <button type="button" className="nav-button" onClick={() => navigate('/mode-selection')}>Back</button>
      </main>
    </div>
  );
}
