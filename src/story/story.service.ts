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

  async getStroy(dto: PaginationDto): Promise<PaginationResult<Story>> {
    const [result, total] = await this.storyRepository.findAndCount({
      skip: (dto.page - 1) * dto.limit,
      take: dto.limit,
    });
    return createPaginationResult(result, dto.page, dto.limit, total);
  }
}
