import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Signup() {
  const navigate = useNavigate();

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function createUser() {
    localStorage.setItem('userName', userName);
    navigate('/mode-selection');
  }

  return (
    <div>
      <header>
        <p>Sign Up</p>
      </header>
      <div>
        <li>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="vEmail" onChange={(e) => setUserName(e.target.value)} />
        </li>
        <li>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="vPassword" onChange={(e) => setPassword(e.target.value)} />
        </li>
        <button type="button" className="nav-button" onClick={() => createUser()} disabled={!userName || !password}>Submit</button>
        <button type="button" className="nav-button" onClick={() => navigate('/home')}>cancel</button>
      </div>
    </div>
  );
}