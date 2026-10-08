import React from 'react';
import { useNavigate } from 'react-router-dom';
import './help.css';

export function Help() {
  const navigate = useNavigate();

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
          <button type="submit" className="nav-button">Submit</button>
        </form>
        <button type="button" className="nav-button" onClick={() => navigate('/mode-selection')}>Go back</button>
      </main>
    </div>
  );
}
