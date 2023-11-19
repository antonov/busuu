import { User } from "../entities/User";
import { UserService } from "../ports/inbound/UserService";
import { UserRepository } from "../ports/outbound/UserRepository";
import { UserDomainService } from "./UserDomainService";


function UserRepositoryMock(): UserRepository {
    return {
        findById: jest.fn().mockReturnValue(Promise.resolve(new User())),
        create: jest.fn().mockReturnValue(Promise.resolve(new User()))
    }
}

describe('UserDomainService', () => {

    let service: UserService = null

    it('should call UserRepository.findById()"', async () => {
        const repositoryMock =  UserRepositoryMock()
        service = new UserDomainService(repositoryMock)
        await service.findById('test-uuid')
        expect(repositoryMock.findById).toBeCalled()
    });
    
    
    it('should call UserRepository.create()"', async () => {
        const repositoryMock =  UserRepositoryMock()
        service = new UserDomainService(repositoryMock)
        await service.create(new User())
        expect(repositoryMock.create).toBeCalled()
    });

})