import React from "react";
import UserCard from "./UserCard.tsx";
import { useUsers } from "./hooks/queries/users/useUsers.ts";

const UserList: React.FC = () => {
  const { data } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      {data?.data?.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
