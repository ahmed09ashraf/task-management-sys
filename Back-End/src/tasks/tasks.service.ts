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

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update({ id }, { ...updateTaskDto });
  }

  async remove(id: number) {
    return this.taskRepository.delete({ id });
  }
}
