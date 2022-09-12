import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Injectable } from '@nestjs/common';

@Entity({ name: 'tb_adress' })
@Injectable()
export class AdressEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ name: 'co_city', nullable: false })
  city: string;

  @Column('uuid', { name: 'co_user_id', nullable: false })
  userId?: string;

  @Column({ name: 'co_street', nullable: false })
  street?: string;

  @Column({ name: 'co_district', nullable: false })
  district?: string;

  @Column({ name: 'co_zip_code', nullable: false })
  zipCode?: string;

  @Column({ name: 'co_number', nullable: false })
  number?: number;

  @Column({ name: 'co_block', nullable: false })
  block?: number;

  @Column({ name: 'co_state', nullable: false })
  state?: string;

  @Column({ name: 'co_uf', nullable: true })
  uf?: string;

  @Column({ name: 'co_ref', nullable: false })
  reference?: string;

  @CreateDateColumn({ name: 'co_created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'co_updated_at' })
  updatedAt?: Date;
}
