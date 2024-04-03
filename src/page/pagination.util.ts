export class PaginationResult<T> {
  data: T[];
  page: number;
  limit: number;
  totalCount: number;
  totalPage: number;

  constructor(data: T[], page: number, limit: number, totalCount: number) {
    this.data = data;
    this.page = page;
    this.totalPage = Math.ceil(totalCount / limit);
    this.limit = limit;
  }
}

export function createPaginationResult<T>(
  data: T[],
  page: number,
  totalPage: number,
  limit: number,
): PaginationResult<T> {
  return new PaginationResult(data, page, limit, totalPage);
}
