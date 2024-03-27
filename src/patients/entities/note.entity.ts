import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from './patient.entity';


@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  note_text: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Patient, patient => patient.notes) 
  @JoinColumn({ name: 'patient_id' }) 
  patient: Patient;
}
