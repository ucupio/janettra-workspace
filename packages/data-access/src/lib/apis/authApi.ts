import { User } from '@janettra-workspace/shared-types';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4444';

export const loginUserAPI = async (
  username: string,
  password: string
): Promise<User> => axios.post('/login', { username, password });
export const loginGoogleAPI = async (
  username: string,
  password: string
): Promise<User> => axios.post('/login/google', { username, password });
export const loginFacebookAPI = async (
  username: string,
  password: string
): Promise<User> => axios.post('/login/facebook', { username, password });
