import { User } from "../models/Users.ts";

export interface IUserRepository {
  fetchUsers(): Promise<{ data: User[] }>;
  updateUser(userId: number, userData: User): Promise<User>;
}
