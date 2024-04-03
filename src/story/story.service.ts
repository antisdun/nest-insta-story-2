import { Story } from './entities/story.entity';
import { Injectable } from '@nestjs/common';
import { CreateStoryRequestDto } from './dto/create-story-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoryResponseDto } from './dto/create-story-response.dto';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(Story)
    private storyRepository: Repository<Story>,
  ) {}

  async createStory(
    dto: CreateStoryRequestDto,
  ): Promise<CreateStoryResponseDto> {
    const entity = await this.storyRepository.save(dto);
    return CreateStoryResponseDto.fromEntity(entity);
  }
}
