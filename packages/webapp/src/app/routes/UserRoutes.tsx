import { useCallback, useEffect, useRef } from 'react';
import {
  addUser,
  fetchUsers,
  selectUsers,
} from 'packages/data-access/src/lib/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function UserRoutes() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const onAddUser = useCallback(async () => {
    if (nameInputRef.current && phoneInputRef.current) {
      dispatch(addUser(nameInputRef.current.value));

      nameInputRef.current.value = '';
      phoneInputRef.current.value = '';
    }
  }, [dispatch]);
  return (
    <>
      <div>
        <div>{JSON.stringify(users, null, 2)}</div>
        <Link to="/users/add">Add</Link>
        <Link to="/users/update">Update</Link>
      </div>
      <div>
        <input ref={nameInputRef}></input>
        <input ref={phoneInputRef}></input>
        <button onClick={onAddUser}>Add</button>
        <Link to="/">Users</Link>
        <Link to="/users/update">update</Link>
      </div>
      <div>
        <input ref={passwordInputRef}></input>
        <button onClick={() => null}>Update</button>
        <Link to="/">Users</Link>
        <Link to="/update">update</Link>
      </div>
    </>
  );
}
