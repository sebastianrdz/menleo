import { IChat, IMessage } from 'services/models/chat';
import { ApiCore } from './utils/core';
import { apiProvider } from './utils/provider';

const url = 'chat';

export class ApiChatExtended<IChat> extends ApiCore<IChat> {
  patchMessages(id: string, model: IMessage): Promise<IChat> {
    return apiProvider.patch(`${this.options.url}/${id}`, model);
  }
}

const apiChat = new ApiChatExtended<IChat>({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  delete: false,
  url: url
});

export default apiChat;
