import UserList from "../UserList.tsx";
import UserUpdateForm from "../components/user/UserUpdateForm.tsx";

export default function UsersPage() {
  return (
    <>
      <UserUpdateForm />
      <UserList />
    </>
  );
}
