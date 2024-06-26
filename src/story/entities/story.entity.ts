import { Hashtag } from './hashtag.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Story {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  validTime: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  image: string;

  @ManyToMany(() => Hashtag)
  @JoinTable()
  hashtags: Hashtag[];
}
