import { IsString, IsNotEmpty } from 'class-validator';

export class CreateHospitalServiceDto {
  @IsString()
  @IsNotEmpty()
  service_name: string;

  @IsString()
  description: string;

  @IsString()
  department: string;

  @IsString()
  contact_info: string;
}
