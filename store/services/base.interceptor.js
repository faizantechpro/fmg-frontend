import { store } from '../index';
import Router from 'next/router';

export const interceptRequest = (requestConfig) => {
  const state = store?.getState();
  const token = state.auth.token;
  if (token) {
    requestConfig.headers.Authorization = `bearer ${token}`;
  }
  return requestConfig;
};

export const interceptRequestError = (error) => {
  return Promise.reject(error);
};

export const interceptResponse = (response) => {
  return response;
};

export const interceptResponseError = (error) => {
  if (error.response.status === 401) {
    Router.push(`/?${Router.router.asPath}`);
  }
  return Promise.reject(error);
};
