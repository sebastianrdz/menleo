export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signUp(email: string, username: string, password: string): Promise<void>;
  signOut(): void;
};

export type AuthData = {
  token: string;
  email: string;
  username: string;
};
