import { Test, TestingModule } from '@nestjs/testing';
import { HospitalServicesController } from './hospital-services.controller';

describe('HospitalServicesController', () => {
  let controller: HospitalServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalServicesController],
    }).compile();

    controller = module.get<HospitalServicesController>(HospitalServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
