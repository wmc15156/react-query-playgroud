import { User } from "../domains/users/models/Users.ts";

export const fetchUsers = async (): Promise<{ data: User[] }> => {
  const response = await fetch(`https://reqres.in/api/users?per_page=20`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
