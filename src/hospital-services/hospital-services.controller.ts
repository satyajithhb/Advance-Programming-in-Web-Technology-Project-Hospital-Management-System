import { Controller, Get, Post, Body, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { HospitalServicesService } from './hospital-services.service';
import { CreateHospitalServiceDto } from './dto/create-hospital-service.dto'; 
import { AuthGuard } from '@nestjs/passport';
import { SessionGuard } from 'src/patient-auth/guards/session.guard';

@Controller('hospitalServices')
export class HospitalServicesController {
  constructor(private readonly hospitalServicesService: HospitalServicesService) {}

  @Post('createhospital-service')
  @UsePipes(ValidationPipe)
  create(@Body() createHospitalServiceDto: CreateHospitalServiceDto) {
    return this.hospitalServicesService.create(createHospitalServiceDto);
  }

  @Get('hospital-services')
  @UseGuards(SessionGuard)
  findAll() {
    return this.hospitalServicesService.findAll();
  }
}
