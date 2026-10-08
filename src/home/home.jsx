import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css'

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <div className="flex justify-center">
          <img src="/8020Title.png" alt="80/20 image" className="block h-auto" />
        </div>
      </header>

      <main>
        <div className="buttons">
          <button type="button" className="nav-button" onClick={() => navigate('/login')}>Login</button>
          <button type="button" className="nav-button" onClick={() => navigate('/signup')}>Signup</button>
          <button type="button" className="nav-button" onClick={() => navigate('/score-board')}>Score Board</button>
          <button type="button" className="nav-button" onClick={() => navigate('/help')}>Help</button>
        </div>
      </main>
    </div>
  );
}