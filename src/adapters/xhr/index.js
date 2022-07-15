import Axios from 'axios';

const initializers = {
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
};

function returnAxiosInstance() {
  return Axios.create(initializers);
}

export function get(url) {
  const axios = returnAxiosInstance();
  return axios.get(url);
}

export function post(url, requestData) {
  const axios = returnAxiosInstance();
  return axios.post(url, requestData);
}
