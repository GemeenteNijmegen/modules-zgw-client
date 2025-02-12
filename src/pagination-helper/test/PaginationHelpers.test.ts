import { PaginatedResponse } from '../PaginatedResponse';
import { getAllPaginatedResults, getTotalCount, getPaginatedPage, hasNextPage, hasPreviousPage } from '../PaginationHelpers';

const mockApiCall = async (params: any): Promise<{ data: PaginatedResponse<string> }> => {
  const page = params.page ? Number(params.page) : 1;
  const totalPages = 3;

  const results = [
    ['Item 1', 'Item 2'], // Page 1
    ['Item 3', 'Item 4'], // Page 2
    ['Item 5'], // Page 3
  ];

  return Promise.resolve({
    data: {
      count: 5,
      next: page < totalPages ? `http://api.example.org?page=${page + 1}` : null,
      previous: page > 1 ? `http://api.example.org?page=${page - 1}` : null,
      results: results[page - 1] || [],
    },
  });
};

describe('PaginationHelpers', () => {

  test('should fetch all paginated results', async () => {
    const allResults = await getAllPaginatedResults(mockApiCall, {});
    expect(allResults).toEqual(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  });

  test('should fetch the total count of results', async () => {
    const totalCount = await getTotalCount(mockApiCall, {});
    expect(totalCount).toBe(5);
  });

  test('should fetch a specific page of results', async () => {
    const pageData = await getPaginatedPage(mockApiCall, 2, {});
    expect(pageData.results).toEqual(['Item 3', 'Item 4']);
  });

  test('should check if there is a next page', async () => {
    const response = await mockApiCall({ page: 1 });
    expect(hasNextPage(response.data)).toBe(true);
  });

  test('should check if there is a previous page', async () => {
    const response = await mockApiCall({ page: 2 });
    expect(hasPreviousPage(response.data)).toBe(true);
  });
});