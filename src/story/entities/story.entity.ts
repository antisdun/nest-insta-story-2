import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Url } from 'url';

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
  image: Url;

  @Column()
  hashtags: string[];
}
