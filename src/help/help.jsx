import React from 'react';
import './help.css';

export function Help() {
  return (
    <div>
      <header>Help</header>
      <main>
        <p>
          The page where you get help and info adout the game
        </p>
        <form id="helpForm">
          <label htmlFor="help">Help request</label>
          <textarea id="help" defaultValue="Type Help message here:" />
          <button type="submit">Submit</button>
        </form>
        <button type="button" onClick={() => window.location.href = 'index.html'}>Go back</button>
      </main>
    </div>
  );
}
