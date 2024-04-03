import { Url } from 'url';

export class CreateStoryRequestDto {
  title: string;

  author: string;

  validTime: number;

  image: Url;

  hashtags: string[];
}
