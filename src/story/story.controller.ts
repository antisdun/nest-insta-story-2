import { Controller, Post, Body } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryRequestDto } from './dto/create-story-request.dto';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async createStory(@Body() dto: CreateStoryRequestDto) {
    return await this.storyService.createStory(dto);
  }
}
