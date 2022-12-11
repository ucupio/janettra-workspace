import { userReducerTypes } from '../types';

const initialState = {
  users: [],
  user: {},
  error: false,
  loading: true,
};

function usersReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  const { type, payload } = action;

  switch (type) {
    case userReducerTypes.USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
}

export default usersReducer;
