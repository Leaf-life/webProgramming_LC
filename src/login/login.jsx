import React from 'react';
import './login.css';

export function Login() {
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
        <button type="button" onClick={() => window.location.href = 'modeSelection.html'}>login</button>
        <button type="button" onClick={() => window.location.href = 'index.html'}>cancel</button>
      </div>
    </div>
  );
}
