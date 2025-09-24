/**
 * 数据库DO
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class dataQueryDo {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  [prop: string]: any;
}
