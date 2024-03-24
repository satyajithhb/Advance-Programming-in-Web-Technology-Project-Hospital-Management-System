// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Doctor } from './doctor.entity';

// @Entity()
// export class Patient {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   patientName: string;

//   @Column()
//   patientAddress: string;

//   @Column()
//   patientAge: number;

//   @Column()
//   patientGender: string;

//   @ManyToOne(() => Doctor, doctor => doctor.patients)
// doctor: Doctor;
// }