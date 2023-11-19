import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../core/domain/entities/User';
import { UserRepository } from '../../core/domain/ports/outbound/UserRepository';
import { UserEntity } from '../exercises_db/entities/user.entity';

@Injectable()
export class UserRepositoryAdapter implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async findById(id: string): Promise<User> {
    return this.repository.findOneBy({ id: id });
  }

  async create(user: User): Promise<User> {
    return this.repository.save(user);
  }
}
