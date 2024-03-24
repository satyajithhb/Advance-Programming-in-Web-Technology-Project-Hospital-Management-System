import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './entity/doctor.entity';
import { AuthGuard } from './auth/auth.guard';

@Controller('doctor')
export class DoctorController {
  constructor(
    private readonly doctorService: DoctorService,
  ) {}

  @Get('myprofile')
  @UseGuards(AuthGuard)
  async getUserProfile(@Req() req) {
    const usermail = req.user.doc_email;
    const userProfile = await this.doctorService.findDoctorByEmail(usermail);
    return userProfile;
  }

  @Get(':id')
  async getDoctorById(@Param('id') id: number): Promise<Doctor> {
    return await this.doctorService.findDoctorById(id);
  }
}
