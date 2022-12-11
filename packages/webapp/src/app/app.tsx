import { useEffect, useCallback, useState, useRef } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUsers,
  selectUsers,
  addUser,
} from '@janettra-workspace/data-access';
import { updateUser } from 'packages/data-access/src/lib/api';

export function App() {
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
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">user</Link>
          </li>
          <li>
            <Link to="/add">add</Link>
          </li>
          <li>
            <Link to="/update">update</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.
              <div>{JSON.stringify(users, null, 2)}</div>
              <Link to="/add">Add</Link>
              <Link to="/add">Update</Link>
            </div>
          }
        />
        <Route
          path="/add"
          element={
            <div>
              <input ref={nameInputRef}></input>
              <input ref={phoneInputRef}></input>
              <button onClick={onAddUser}>Add</button>
              <Link to="/">Home</Link>
              <Link to="/update">update</Link>
            </div>
          }
        />
        <Route
          path="/update"
          element={
            <div>
              <input ref={passwordInputRef}></input>
              <button onClick={() => null}>Update</button>
              <Link to="/">Home</Link>
              <Link to="/update">update</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
