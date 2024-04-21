export interface IResponsePaginated<T> {
    data: T[];
    total: number;
    page: number;
    error: string;
  }
  