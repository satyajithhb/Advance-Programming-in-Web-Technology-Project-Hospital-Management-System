import { IsEmail, IsNotEmpty } from "class-validator";

export class SendEmailDto {


    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email must be a valid email address' })
    email: string;

    @IsNotEmpty({ message: 'Text is required' })
    text: string;
  }
  