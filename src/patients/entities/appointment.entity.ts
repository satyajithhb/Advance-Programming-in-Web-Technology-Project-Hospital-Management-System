import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from './patient.entity';
import { Doctor } from 'src/doctor/entities/doctor.entity';


@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp')
  appointmentDateTime: Date;

  @Column({ nullable: true })
  reason: string; 

  @ManyToOne(() => Patient, patient => patient.appointments)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Doctor, doctor => doctor.appointments)
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;
}
