import React from 'react';

export class AuthState {
  static Unknown = new AuthState('unknown');
  static Authenticated = new AuthState('authenticated');
  static Unauthenticated = new AuthState('unauthenticated');

  constructor(name) {
    this.name = name;
  }
}

export const AuthStateContext = React.createContext(null);

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuthState must be used within AuthStateContext.Provider');
  }

  return context;
}