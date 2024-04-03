import { Story } from './entities/story.entity';
import { Injectable } from '@nestjs/common';
import { CreateStoryRequestDto } from './dto/create-story-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoryResponseDto } from './dto/create-story-response.dto';
import { PaginationDto } from 'src/page/pagination.dto';
import {
  PaginationResult,
  createPaginationResult,
} from 'src/page/pagination.util';

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

  async getStroy(
    dto: PaginationDto,
  ): Promise<PaginationResult<CreateStoryResponseDto>> {
    const [result, total] = await this.storyRepository
      .createQueryBuilder('story')
      .leftJoinAndSelect('story.hashtags', 'hashtag')
      .where(
        'story.createdAt > DATE_SUB(CURRENT_TIMESTAMP(), INTERVAL story.validTime HOUR)',
      )
      .skip(Number((dto.page - 1) * dto.limit))
      .take(Number(dto.limit))
      .getManyAndCount();

    const data = result.map((story) =>
      CreateStoryResponseDto.fromEntity(story),
    );

    return createPaginationResult(data, dto.page, total, dto.limit);
  }
}
