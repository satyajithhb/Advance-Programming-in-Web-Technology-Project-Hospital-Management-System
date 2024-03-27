import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hospital_services')
export class HospitalService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  service_name: string;

  @Column('text')
  description: string;

  @Column({ length: 100 })
  department: string;

  @Column('text')
  contact_info: string;
}
