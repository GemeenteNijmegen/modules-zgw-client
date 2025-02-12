export interface PaginatedResponse<T> {
  /**
     * Total number of items
     */
  count?: number;
  /**
     * @format uri
     * @example "http://api.example.org/accounts/?page=4"
     */
  next?: string | null;
  /**
     * @format uri
     * @example "http://api.example.org/accounts/?page=2"
     */
  previous?: string | null; // URL to the previous page
  /**
     * The actual data
     */
  results?: T[];
}