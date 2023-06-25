import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, CreateUserTaskDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAllUsers() {
    return this.usersService.findUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(+id);
    return { name: user.name, email: user.email };
  }

  @Post(':id/tasks')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserTaskDto: CreateUserTaskDto,
  ) {
    return this.usersService.createUserTask(id, createUserTaskDto);
  }
}
