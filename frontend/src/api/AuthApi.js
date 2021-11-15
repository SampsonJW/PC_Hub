import axios from 'axios';
import { Resolve } from './Resolve.js';

const route = process.env.REACT_APP_AUTH_API;
axios.defaults.withCredentials = true;

export async function loginUser(user) {
  return await Resolve(axios.post(`${route}/auth/login`, user));
}

export async function registerUser(userDetails) {
  return await Resolve(axios.get(`${route}/auth/register`, userDetails));
}

export default loginUser;
