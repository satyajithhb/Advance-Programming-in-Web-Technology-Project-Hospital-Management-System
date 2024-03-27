// src/patient-auth/patient-auth.controller.ts
import { Controller, UseGuards, Post, Request, Get, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PatientAuthService } from './patient-auth.service';
import { Response } from 'express';


@Controller('patient-auth')
export class PatientAuthController {
  constructor(private patientAuthService: PatientAuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.patientAuthService.login(req,req.user);
  }


  @Post('logout')
  async logout(@Request() req, @Res() res: Response) {
    try {
      await this.patientAuthService.logout(req);
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      
      res.status(error.getStatus()).json({ message: error.message });
    }
  }


  
}
