/* eslint-disable prettier/prettier */
const APP_URL = __DEV__
  ? 'https://localhost:8443'
  : 'https://dry-beach-13977.herokuapp.com';

export const requests = {
  get: (url) =>
    fetch(`${APP_URL}${url}`, {
      method: 'GET',
    }),
  post: (url, body) =>
    fetch(`${APP_URL}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }),
  put: (url, body) =>
    fetch(`${APP_URL}${url}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }),
  del: (url) =>
    fetch(`${APP_URL}${url}`, {
      method: 'DELETE',
    }),
};
