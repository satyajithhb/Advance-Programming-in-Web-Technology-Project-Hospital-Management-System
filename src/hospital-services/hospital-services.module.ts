import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalServicesService } from './hospital-services.service';
import { HospitalServicesController } from './hospital-services.controller';
import { HospitalService } from './entities/hospital-service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HospitalService])], 
  providers: [HospitalServicesService],
  controllers: [HospitalServicesController],
})
export class HospitalServicesModule {}
