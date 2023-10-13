import { handleResponse, handleError } from './response';

const BASE_URL = 'http://localhost:4000/api';

const getAll = (resource: string): Promise<any> => {
  return fetch(`${BASE_URL}/${resource}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

const getSingle = (resource: string, id: string): Promise<any> => {
  return fetch(`${BASE_URL}/${resource}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

const post = (resource: string, model: any): Promise<any> => {
  return fetch(`${BASE_URL}/${resource}`, {
    method: 'POST',
    body: JSON.stringify(model),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

const put = (resource: string, model: any): Promise<any> => {
  return fetch(`${BASE_URL}/${resource}`, {
    method: 'PUT',
    body: JSON.stringify(model),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

const patch = (resource: string, model: any): Promise<any> => {
  return fetch(`${BASE_URL}/${resource}`, {
    method: 'PATCH',
    body: JSON.stringify(model),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

const remove = (resource: string, id: string): Promise<any> => {
  return fetch(`${BASE_URL}/${resource}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove
};
