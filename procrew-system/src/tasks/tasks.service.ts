import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  create(taskDetails: CreateTaskDto) {
    const newTask = this.taskRepository.create({
      ...taskDetails,
      createdAt: new Date(),
    });
    return this.taskRepository.save(newTask);
  }

  findTasks() {
    return this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({ where: { id } });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
