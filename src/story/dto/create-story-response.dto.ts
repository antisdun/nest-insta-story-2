import { Hashtag } from './../entities/hashtag.entity';
import { Story } from '../entities/story.entity';

export class CreateStoryResponseDto {
  id: number;
  createdAt: Date;
  validTime: number;
  title: string;
  author: string;
  image: string;
  hastags: Hashtag[];

  public static fromEntity(entity: Story): CreateStoryResponseDto {
    const dto = new CreateStoryResponseDto();
    dto.id = entity.id;
    dto.createdAt = entity.createdAt;
    dto.validTime = entity.validTime;
    dto.title = entity.title;
    dto.author = entity.author;
    dto.image = entity.image;
    dto.hastags = entity.hashtags;
    return dto;
  }
}
