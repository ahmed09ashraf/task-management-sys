import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { Task } from 'src/tasks/entities/task.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'pro-crew',
          entities: [User , Task],
          synchronize: true,
      }),
      TypeOrmModule.forFeature([User]),
      JwtModule.register({
          secret: 'secret',
          signOptions: {expiresIn: '1d'}
      })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
}