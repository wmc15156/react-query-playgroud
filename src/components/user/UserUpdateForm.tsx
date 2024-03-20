import React, { useState } from "react";
import { useUpdateUser } from "../../hooks/queries/posts/usePost.tsx";

const UserUpdateForm = () => {
  const { mutate } = useUpdateUser();
  const [userId] = useState<number>(1); // 예시로 1 사용, 실제로는 선택 또는 입력받아야 함
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form", mutate);

    mutate({
      userId,
      userData: {
        id: userId,
        email,
        first_name: firstName,
        last_name: lastName,
      },
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-update-form">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={handleSubmit}>Update User</button>
      </form>
    </div>
  );
};

export default UserUpdateForm;
