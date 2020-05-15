/* eslint-disable prettier/prettier */
import {requests} from './requests';

export const Auth = {
  login: (email, password) =>
    requests.post('/authentication_token', {email, password}),
  register: (email, roles, password) =>
    requests.post('/users', {email, roles, password}),
};
