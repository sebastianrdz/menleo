export interface IChat {
  _id?: string;
  usernames: string[];
  messages: IMessage[];
}

export interface IMessage {
  text: string;
  username: string;
  timestamp: string;
}
