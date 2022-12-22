import { User } from '@janettra-workspace/shared-types';

interface PayloadProps {
  type: string;
  payload: unknown;
}

export const login = (credentials: PayloadProps) => ({
  type: 'LOGIN',
  payload: credentials,
});
export const loginSuccessful = (userData: PayloadProps) => ({
  type: 'LOGIN_SUCCESSFUL',
  payload: userData,
});
export const logout = () => ({ type: 'LOGOUT' });
export const loginFailed = (error: PayloadProps) => ({
  type: 'LOGIN_FAILED',
  payload: error,
});
export const tryAgain = () => ({ type: 'TRY_AGAIN' });

export const selectUsers = (state: User[]) => state;

export const fetchUsers = () => ({ type: 'USERS_FETCH_REQUESTED' });
export const toggleUser = (user: User) => ({
  type: 'UPDATE_USER_REQUESTED',
  payload: {
    ...user,
    password: !user.password,
  },
});
export const removeUser = (user: User) => ({
  type: 'DELETE_USER_REQUESTED',
  payload: user,
});
export const addUser = (text: string) => ({
  type: 'CREATE_USER_REQUESTED',
  payload: text,
});
