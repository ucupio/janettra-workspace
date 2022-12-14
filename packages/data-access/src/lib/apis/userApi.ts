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

export const getUsersAPI = async () => axios.get('/api/auth/users');

export const getUserByIdAPI = async (id: string) =>
  axios.get(`/api/users/${id}`);

export const createUserAPI = async (user: User) =>
  axios.post(`/api/users`, user);

export const updateUserAPI = async (user: User) =>
  axios.put(`/api/users/${user.id}`, user);

export const deleteUserByIdAPI = async (id: string) =>
  axios.delete(`/api/users/${id}`);
