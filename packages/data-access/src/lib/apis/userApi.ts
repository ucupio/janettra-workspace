import { User } from '@janettra-workspace/shared-types';
import axios from 'axios';

export async function fetchUser(userId: string) {
  const response = await axios.get(`/users/${userId}`);
  return response.data;
}

export async function updateUser(user: User) {
  const response = await axios.put(`/users/${user.id}`, user);
  return response.data;
}

export async function deleteUser(userId: string) {
  await axios.delete(`/users/${userId}`);
}
