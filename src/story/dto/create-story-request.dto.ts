import { Hashtag } from './../entities/hashtag.entity';
export class CreateStoryRequestDto {
  title: string;

  author: string;

  validTime: number;

  image: string;

  hashtags: Hashtag[];
}
