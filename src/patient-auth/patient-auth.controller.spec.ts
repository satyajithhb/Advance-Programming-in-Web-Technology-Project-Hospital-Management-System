import { Test, TestingModule } from '@nestjs/testing';
import { PatientAuthController } from './patient-auth.controller';

describe('PatientAuthController', () => {
  let controller: PatientAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientAuthController],
    }).compile();

    controller = module.get<PatientAuthController>(PatientAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
