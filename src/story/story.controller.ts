import { Controller, Post, Body, Get } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryRequestDto } from './dto/create-story-request.dto';
import { PaginationDto } from 'src/page/pagination.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Story')
@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  @ApiOperation({ summary: '스토리 생성' })
  @ApiResponse({ status: 201, description: '스토리가 생성되었습니다.' })
  @ApiResponse({ status: 400, description: '스토리 생성에 실패  하였습니다.' })
  async createStory(@Body() dto: CreateStoryRequestDto) {
    return await this.storyService.createStory(dto);
  }

  @Get()
  @ApiOperation({ summary: '스토리 조회' })
  @ApiResponse({ status: 200, description: '스토리를 조회합니다.' })
  @ApiResponse({ status: 400, description: '스토리 조회에 실패하였습니다.' })
  async getStory(@Body() dto: PaginationDto) {
    return await this.storyService.getStroy(dto);
  }
}
