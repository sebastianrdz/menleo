import { AuthContextData, AuthData } from 'models/auth';
import React, { createContext, useState } from 'react';
import apiUser from 'services/api/user';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const callToast = (msg: string) => {
    setLoading(false);
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg('');
    }, 3000);
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    if (!email || !password) {
      callToast('correo y contraseña son requeridos');
      return;
    }

    const data = await apiUser.getSingle(email.toLocaleLowerCase());

    if (!data || data.password !== password) {
      callToast('contraseña o correo incorrecto');
      return;
    }

    console.log(data);

    const _authData: AuthData = {
      user_id: data?.id || '',
      token: data?.id || '123',
      email: data.email,
      username: data.username,
    };
    setLoading(false);
    setAuthData(_authData);
  };

  const signUp = async (email: string, username: string, password: string) => {
    setLoading(true);

    if (!email || !password || !username) {
      callToast('coreo, contraseña y nombre de usuario son requeridos');
      return;
    }
    const data = await apiUser.getSingle(email);
    if (data) {
      setLoading(false);
      callToast('este correo ya esta registrado');
      return;
    }

    await apiUser
      .post({ email, username, password })
      .then((res) => {
        const _authData: AuthData = {
          user_id: res?.id || '',
          token: res?.id || '',
          email: res.email,
          username: res.username,
        };
        setAuthData(_authData);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    setLoading(false);
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ authData, loading, errorMsg, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
