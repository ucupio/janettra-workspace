import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Code, Text } from '@mantine/core';

import { User } from '@janettra-workspace/shared-types';

export default function UserPage() {
  const users = useSelector(
    (state: { users: { users: User[]; isLoaded: boolean } }) =>
      state.users.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_IS_LOADED', payload: true });
  }, [dispatch]);

  return (
    <div>
      <Code>{JSON.stringify(users, null, 2)}</Code>
      <Text>User List</Text>
    </div>
  );
}
