import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from './patient.entity'; // Adjust the import path as needed

@Entity('feedback')
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  feedback_message: string;

  @Column()
  rating: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  posted_at: Date;

  @ManyToOne(() => Patient, patient => patient.feedbacks)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;
}
