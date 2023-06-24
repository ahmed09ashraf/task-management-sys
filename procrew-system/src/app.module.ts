import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersController } from './users/user.controller';
// import { UsersService } from './users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pro-crew',
      entities: [User, Task],
      synchronize: true,
    }),
    UsersModule,
    TasksModule,

    AuthModule,
  ],
  controllers: [/*UserController,*/ AppController],
  providers: [AppService /*, UserService*/],
})
export class AppModule {}
