import { AuthContextData, AuthData } from 'models/auth';
import React, { createContext, useState } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    console.log('Email:', email);
    console.log('Password:', password);

    const _authData: AuthData = {
      token: '123456',
      email: email,
      username: email?.split('@')[0],
    };

    setLoading(false);
    setAuthData(_authData);
  };

  const signUp = async (email: string, username: string, password: string) => {
    setLoading(true);
    const _authData: AuthData = {
      token: '123456',
      email: email,
      username: username,
    };
    setLoading(false);
    setAuthData(_authData);
  };

  const signOut = async () => {
    setLoading(true);
    setLoading(false);
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ authData, loading, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
