import axios from 'axios';

export const authInstance = axios.create({
  baseURL: process.env['NX_API_URL'],
  timeout: 4000,
});
