import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  status: string;
  
  @IsNotEmpty()
  @IsNumber()
  taskPeriod: number;
}
