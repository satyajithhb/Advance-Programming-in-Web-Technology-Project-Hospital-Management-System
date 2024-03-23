import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from '../Nurse/local.strategy';
import { JwtStrategy } from '../Nurse/jwt.strategy';
import { AuthController } from './auth.controller';
import { UserModule } from '../Nurse/guser.module';

@Module({
  imports: [
    forwardRef(() => UserModule), // Use forwardRef here
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  
})
export class AuthModule {}
