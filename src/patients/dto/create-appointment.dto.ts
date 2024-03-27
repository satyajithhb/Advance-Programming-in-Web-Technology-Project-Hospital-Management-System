import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  doctorId: number;

  @IsDateString()
  appointmentDateTime: Date;

  @IsString()
  @IsOptional()
  reason?: string;
}
