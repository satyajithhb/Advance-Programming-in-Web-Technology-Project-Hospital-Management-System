// src/patient-auth/patient-auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PatientAuthService } from './patient-auth.service';
import { PatientLocalStrategy } from './patient-local.strategy';
import { PatientJwtStrategy } from './patient-jwt.strategy';
import { PatientsModule } from '../patients/patients.module'; // Import PatientsModule
import { PatientAuthController } from './patient-auth.controller';

@Module({
  imports: [
    PatientsModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, 
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [PatientAuthService, PatientLocalStrategy, PatientJwtStrategy],
  controllers: [PatientAuthController],
  exports: [PatientAuthService,PatientLocalStrategy,PatientJwtStrategy],
})
export class PatientAuthModule {}
