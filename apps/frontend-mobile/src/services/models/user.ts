export interface IUser {
  id?: string;
  email: string;
  username: string;
  password: string;
}

export interface IUserFilter {
  email: string;
  username: string;
}
