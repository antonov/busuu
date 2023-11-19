import { User } from "../entities/User";
import { UserService } from "../ports/inbound/UserService";
import { UserRepository } from "../ports/outbound/UserRepository";

export class UserDomainService implements UserService {

    constructor(private repository: UserRepository) {}

    findById(id: string): Promise<User> {
        return this.repository.findById(id)
    }
    
    create(user: User): Promise<User> {
        return this.repository.create(user)
    }

}