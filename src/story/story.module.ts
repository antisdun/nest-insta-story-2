import { Story } from './entities/story.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Story])],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
