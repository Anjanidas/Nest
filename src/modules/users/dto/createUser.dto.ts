import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsString()
  @IsOptional()
  email: string;
}
