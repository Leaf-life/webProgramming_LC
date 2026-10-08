import React from 'react';
import './scoreBoard.css';

export function ScoreBoard() {
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
        <button type="button" onClick={() => window.location.href = 'index.html'}>Back</button>
      </main>
    </div>
  );
}
