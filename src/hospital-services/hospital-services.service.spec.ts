import { Test, TestingModule } from '@nestjs/testing';
import { HospitalServicesService } from './hospital-services.service';

describe('HospitalServicesService', () => {
  let service: HospitalServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitalServicesService],
    }).compile();

    service = module.get<HospitalServicesService>(HospitalServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
