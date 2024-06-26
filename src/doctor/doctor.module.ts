import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Doctor } from './entity/doctor.entity';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { AuthService } from './auth/auth.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctor]),
    JwtModule.register({
      global: true,
      secret: "3NP_Backend_Doctor",
      signOptions: { expiresIn: '30m' },
    }),
    MailerModule.forRoot({
      transport: {
      host: 'smtp.gmail.com',
      port: 465,
      ignoreTLS: true,
      secure: true,
      auth: {
      user: 'adstudentmin@gmail.com',
      pass: 'bsqocjypvwwbmaag'
      },
      }
      })
  ],
  controllers: [DoctorController],
  providers: [DoctorService,AuthService],
  exports: [DoctorService],
})
export class DoctorModule {}
