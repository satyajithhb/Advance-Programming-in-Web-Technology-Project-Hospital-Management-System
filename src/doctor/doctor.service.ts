import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entity/doctor.entity';
import { RegistrationDto, LoginDto } from './dto/doctor.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    private mailerService: MailerService,
  ) {}

  async addDoctor(myobj: RegistrationDto): Promise<RegistrationDto> {
    await this.mailerService.sendMail({
      to: myobj.doc_email,
      subject: 'Account creation confirmation',
      text: 'Registration successful.',
    });
    return await this.doctorRepository.save(myobj);
}

async findOne( logindata:LoginDto): Promise<any> {
  return await this.doctorRepository.findOneBy({doc_email:logindata.doc_email});
}


  async findDoctorByEmail(email: string): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOne({ where: { doc_email: email } });
    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }
    return doctor;
  }

  async findDoctorById(id: number): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }
    return doctor;
  }

  async updatePassword(usermail: string, newPasswordHash: string): Promise<void> {
    const user = await this.findDoctorByEmail(usermail);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    user.password = newPasswordHash;
    await this.doctorRepository.save(user);
  }

  async updateDoctor(doctor: Doctor): Promise<Doctor> {
    return await this.doctorRepository.save(doctor);
  }
}
