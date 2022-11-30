import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch,useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h1>List of Users</h1>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div> Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
export default UserView

