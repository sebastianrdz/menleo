import { ApiCore } from './utils/core';
import { IUser, IUserFilter } from 'services/models/user';

const url = 'user';

const apiUser = new ApiCore<IUser>({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: false,
  delete: false,
  url: url
});

export default apiUser;
