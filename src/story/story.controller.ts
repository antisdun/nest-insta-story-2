import { Controller, Post, Body, Get } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryRequestDto } from './dto/create-story-request.dto';
import { PaginationDto } from 'src/page/pagination.dto';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async createStory(@Body() dto: CreateStoryRequestDto) {
    return await this.storyService.createStory(dto);
  }

  @Get()
  async getStory(@Body() dto: PaginationDto) {
    return await this.storyService.getStroy(dto);
  }
}
