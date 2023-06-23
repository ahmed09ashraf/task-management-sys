import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../users/entities/user.entity";
import {Repository} from "typeorm";
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
      ) {}

    async create(data: any): Promise<User> {
        return this.userRepository.save(data);
    }

    async findOne(condition: any): Promise<User> {
        return this.userRepository.findOne({where:[{email : condition}]});
    }

    
// @plumemotorpartpmp1625
// قبل 7 أشهر
// Update for 2022-11-02   Timeline 16:17    use :      
// async findOne(condition: any):Promise<User>{
// return this.oUserRepository.findOne({
//         where:[{emaail:condition}

    // create(userDetails: CreateUserDto) {
    //     const newUser = this.userRepository.create({
    //       ...userDetails,
    //       createdAt: new Date(),
    //     });
    //     return this.userRepository.save(newUser);
    //   }
    
      findUsers() {
        return this.userRepository.find();
      }
    
    //   async findOne(id: number) {
    //     return await this.userRepository.findOne({ where: { id } });
    //   }
    
}
