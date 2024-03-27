import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HospitalService } from './entities/hospital-service.entity';
import { CreateHospitalServiceDto } from './dto/create-hospital-service.dto'; 

@Injectable()
export class HospitalServicesService {
  constructor(
    @InjectRepository(HospitalService)
    private readonly hospitalServiceRepository: Repository<HospitalService>,
  ) {}

  async create(createHospitalServiceDto: CreateHospitalServiceDto): Promise<HospitalService> {
    const hospitalService = this.hospitalServiceRepository.create(createHospitalServiceDto);
    return this.hospitalServiceRepository.save(hospitalService);
  }

  async findAll(): Promise<HospitalService[]> {
    return this.hospitalServiceRepository.find();
  }
}
