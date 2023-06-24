import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  public name: string;
  @IsEmail()
  public email: string;
  @IsNotEmpty()
  public password: string;
}

export class CreateTaskDto {
  name: string;
  period: string;
  status : string ;
}
