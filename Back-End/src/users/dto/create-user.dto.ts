import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  public name: string;
  @IsEmail()
  public email: string;
  @IsNotEmpty()
  public password: string;
}

export class CreateUserTaskDto {
  title: string;
  period: string;
  status: string ;
  userUd : number ;
}
