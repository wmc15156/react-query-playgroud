import { User } from "../models/Users.ts";
import { IUserRepository } from "./IUserRepository.ts";

export class UserRepository implements IUserRepository {
  async fetchUsers(): Promise<{ data: User[] }> {
    const response = await fetch(`https://reqres.in/api/users?per_page=20`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  async updateUser(userId: number, userData: User): Promise<User> {
    console.log("ddd");
    const response = await fetch(`https://reqres.in/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  }
}
