import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@mantine/core';

import { StoreObject, User } from '@janettra-workspace/shared-types';
import { DataTable } from '../components/table/DataTable';

export default function UserPage() {
  const { users } = useSelector((state: StoreObject) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_USERS' });
  }, [dispatch]);

  return (
    <div>
      <Text>User List</Text>
      <DataTable<User> data={users}></DataTable>
    </div>
  );
}
