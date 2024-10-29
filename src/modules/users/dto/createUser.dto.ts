import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Name {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name: Name;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsString()
  @IsOptional()
  email: string;
}
