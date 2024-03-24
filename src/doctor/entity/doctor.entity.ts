import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doc_name: string;

  @Column()
  doc_address: string;

  @Column()
  doc_email: string;

  @Column()
  doc_phone: string;

  @Column()
  BDMC_certificate_no: string;

  @Column()
  NID_no: string;

  @Column()
  Degree: string;

  @Column()
  Specialism: string;

  @Column({ nullable: true })
  profile_photo: string;

  @Column()
  Visiting_fee: number;

  @Column()
  daily_appointment_time: string;

  @Column()
  password: string;
}
