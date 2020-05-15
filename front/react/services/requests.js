/* eslint-disable prettier/prettier */
import {getSessionStorage} from '../context/session';

const APP_URL = __DEV__
  ? 'https://localhost:8443'
  : 'https://dry-beach-13977.herokuapp.com';

const getToken = async () => {
  const sessionContext = await getSessionStorage();
  if (sessionContext.token) {
    return `Bearer ${sessionContext.token}`;
  }
  return '';
};

export const requests = {
  get: async (url) =>
    fetch(`${APP_URL}${url}`, {
      method: 'GET',
      headers: {
        Authorization: await getToken(),
      },
    }),
  post: async (url, body) =>
    fetch(`${APP_URL}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: await getToken(),
      },
      body: JSON.stringify(body),
    }),
  put: async (url, body) =>
    fetch(`${APP_URL}${url}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: await getToken(),
      },
      body: JSON.stringify(body),
    }),
  del: async (url) =>
    fetch(`${APP_URL}${url}`, {
      method: 'DELETE',
      headers: {
        Authorization: await getToken(),
      },
    }),
};
