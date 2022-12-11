import { User } from '@janettra-workspace/shared-types';

const BASE_URL = 'http://localhost:3333/api/users';

export const getUsers = async (): Promise<User[]> =>
  fetch(`${BASE_URL}`).then((res) => res.json());

export const createUser = async (text: string): Promise<User> =>
  fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
    }),
  }).then((res) => res.json());

export const updateUser = async (user: User): Promise<User> =>
  fetch(`${BASE_URL}/${user.user_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());

export const deleteUser = async (user: User): Promise<User> =>
  fetch(`${BASE_URL}/${user.user_id}`, {
    method: 'DELETE',
  }).then(() => user);
