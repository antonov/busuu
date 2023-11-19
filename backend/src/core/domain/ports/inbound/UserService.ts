import { User } from '../../entities/User';

export interface UserService {
  findById(id: string): Promise<User>;
  create(user: User): Promise<User>;
}
