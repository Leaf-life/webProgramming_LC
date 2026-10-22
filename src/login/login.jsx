import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import {AuthState} from './../authState'

export function Login() {
  const navigate = useNavigate();

  function login({authState}){
    if (localStorage.getItem('userName')){
      navigate('/mode-selection')
      authState = AuthState.Authenticated
    } else {
      alert('New users need to sign up first')
      // navigate('/signup')
    }
  }

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
        <button type="button" className="nav-button" onClick={() => login() } >login</button>
        <button type="button" className="nav-button" onClick={() => navigate('/home')}>cancel</button>
      </div>
    </div>
  );
}
