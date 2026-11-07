import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState, useAuthState } from './../authState';
import './login.css';

export function Signup() {
  const navigate = useNavigate();
  const { setAuthState } = useAuthState();

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  async function createUser(event) {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/create', {
        method: 'post',
        body: JSON.stringify({ email: userName, password }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        const body = await response.json();
        setError(body.msg || 'Unable to create account.');
        return;
      }

      localStorage.setItem('userName', userName);
      setAuthState(AuthState.Authenticated);
      navigate('/mode-selection');
    } catch (requestError) {
      console.error('Unable to create account.', requestError);
      setError('Unable to create account. Please try again.');
    }
  }

  return (
    <div>
      <header>
        <p>Sign Up</p>
      </header>
      <form onSubmit={createUser}>
        <li>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </li>
        <li>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </li>
        {error && <p role="alert">{error}</p>}
        <button type="submit" className="nav-button">Submit</button>
        <button type="button" className="nav-button" onClick={() => navigate('/home')}>cancel</button>
      </form>
    </div>
  );
}