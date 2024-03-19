import { User } from "./models/Users.ts";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="user-avatar"
      />
      <div className="user-info">
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
