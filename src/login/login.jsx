import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <p>Login</p>
      </header>
      <div>
        <li>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="vEmail" />
        </li>
        <li>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="vPassword" />
        </li>
        <button type="button" className="nav-button" onClick={() => navigate('/mode-selection')}>login</button>
        <button type="button" className="nav-button" onClick={() => navigate('/home')}>cancel</button>
      </div>
    </div>
  );
}
