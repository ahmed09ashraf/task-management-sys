import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, CreateUserTaskDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';

@Injectable()
export class UsersService {


  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  create(userDetails: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  findUsers() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async createUserTask(
    id: number,
    createUserTaskDetails: CreateUserTaskDto,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create Task',
        HttpStatus.BAD_REQUEST,
      );
    const newTask = this.taskRepository.create({
      ...createUserTaskDetails,
      user,
    });
    return this.taskRepository.save(newTask);
  }
}
