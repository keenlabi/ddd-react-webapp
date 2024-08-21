import type { User } from "./User";

export interface UserRepository {
  getCurrentUser(): Promise<User>;
}