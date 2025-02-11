export interface ApiResponse<T> {
  data: T;
  meta?: {
    total_pages?: number;
    total_count?: number;
    current_page?: number;
  };
}
