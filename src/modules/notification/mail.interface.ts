import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class sendMailDto {
  @IsString()
  @IsNotEmpty()
  from: string;

  @IsString()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsOptional()
  subject?: string;

  @IsString()
  text: string;
}
