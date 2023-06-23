import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // @Get()
  // @UseGuards(JwtAuthGuard)
  // findAll(@Req() request) {
  //   const user = request.user; // Access the authenticated user
  //   // Perform operations specific to the authenticated user
  //   return `Authenticated User: ${user}`;
  // }

  @Post()
  async create(@Body() createUserDto: CreateTaskDto) {
    return this.tasksService.create(createUserDto);
  }

  @Get()
  findAllTasks() {
    return this.tasksService.findTasks();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.findOne(+id);
    return { title: task.title, period: task.period };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
