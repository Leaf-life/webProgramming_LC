import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState, useAuthState } from './../authState';
import './modeSelection.css';

export function ModeSelection() {
  const navigate = useNavigate();
  const { setAuthState } = useAuthState();

  function logout() {
    localStorage.removeItem('userName');
    setAuthState(AuthState.Unauthenticated);
    navigate('/home');
  }

  return (
    <div>
      <header>
        <p>Select game mode</p>
      </header>
      <main>
        <button type="button" className="nav-button" onClick={() => navigate('/play-single')}>single</button>
        <button type="button" className="nav-button" onClick={() => navigate('/play-multi')}>multi</button>
        <button type="button" className="nav-button" onClick={() => navigate('/score-board')}>Score Board</button>
        <button type="button" className="nav-button" onClick={() => navigate('/help')}>Help Page</button>
        <button type="button" className="nav-button" onClick={() => logout()}>logout</button>
      </main>
    </div>
  );
}
