import { Type } from 'class-transformer';

export class PaginationDto {
  @Type(() => Number)
  page: number = 1;

  @Type(() => Number)
  limit: number = 10;
}
