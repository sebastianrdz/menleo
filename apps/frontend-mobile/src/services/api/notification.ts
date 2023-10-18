import { INotification } from 'services/models/notification';
import { ApiCore } from './utils/core';

const url = 'notification';

const apiNotification = new ApiCore<INotification>({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: false,
  delete: false,
  url: url
});

export default apiNotification;
