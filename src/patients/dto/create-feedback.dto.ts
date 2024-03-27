import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsString()
  feedback_message: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
