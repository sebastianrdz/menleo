import { ApiCore } from './utils/core';
import { IPost } from 'services/models/post';

const url = 'post';

const apiPost = new ApiCore<IPost>({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: false,
  delete: false,
  url: url
});

export default apiPost;
