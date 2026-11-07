import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { AuthState, useAuthState } from './../authState';

export function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { setAuthState } = useAuthState();

  async function loginOrCreate(event) {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'post',
        body: JSON.stringify({ email: userName, password }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        const body = await response.json();
        setError(body.msg || 'Unable to log in.');
        return;
      }

      localStorage.setItem('userName', userName);
      setAuthState(AuthState.Authenticated);
      navigate('/mode-selection');
    } catch (requestError) {
      console.error('Unable to log in.', requestError);
      setError('Unable to log in. Please try again.');
    }
  }

  return (
    <div>
      <header>
        <p>Login</p>
      </header>
      <form onSubmit={loginOrCreate}>
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
        <button type="submit" className="nav-button">login</button>
        <button type="button" className="nav-button" onClick={() => navigate('/home')}>cancel</button>
      </form>
    </div>
  );
}
