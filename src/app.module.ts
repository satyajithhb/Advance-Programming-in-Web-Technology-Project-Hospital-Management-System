import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user1/user1.module';
import { FirstUserModule } from './FirstUser/FirstUser.module';
import { DoctorModule } from './doctor/doctor.module';
import { AuthModule } from './doctor/auth/auth.module';
import { jwtConstants } from './doctor/auth/constants';

@Module({
  imports: [
    UserModule,
    FirstUserModule,
    AuthModule,
    DoctorModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'lastlab',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
