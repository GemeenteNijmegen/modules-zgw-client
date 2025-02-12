import { PaginatedResponse } from './PaginatedResponse';

/**
 * Fetch all paginated results from an API method.
 *
 * This function handles automatic pagination by following the `next` URL until all results are collected.
 *
 * @param apiMethod - The API method from the generated client (e.g., `zaaktypeList`).
 * @param apiArgs - Arguments expected by the API method, including query parameters and optional request params.
 * @returns A combined list of all results across multiple pages.
 *
 * @example
 * const allZaaktypes = await getAllPaginatedResults(api.zaaktypeList, {} as catalogi.ZaaktypeListParams);
 * console.log(allZaaktypes); // All results from paginated responses
 */
export async function getAllPaginatedResults<T>(
  apiMethod: (query: any, params?: any) => Promise<{ data: PaginatedResponse<T> }>,
  ...apiArgs: Parameters<typeof apiMethod>
): Promise<T[]> {
  const allResults: T[] = [];
  let nextUrl: string | null = null;
  let firstRequest = true;

  do {
    const response: { data: PaginatedResponse<T> } = firstRequest
      ? await apiMethod(...apiArgs)
      : await apiMethod({ ...apiArgs[0], page: Number(new URL(nextUrl!).searchParams.get('page')) }, apiArgs[1]);

    allResults.push(...response.data.results ?? []);
    nextUrl = response.data.next || null;
    firstRequest = false;
  } while (nextUrl);

  return allResults;
}

/**
 * Fetch the total count of items from a paginated response.
 *
 * @param apiMethod - The API method from the generated client (e.g., `zaaktypeList`).
 * @param apiArgs - Query parameters and optional request params.
 * @returns The total count of items.
 *
 * @example
 * const totalCount = await getTotalCount(api.zaaktypeList, {} as catalogi.ZaaktypeListParams);
 * console.log(`Total items: ${totalCount}`);
 */
export async function getTotalCount<T>(
  apiMethod: (query: any, params?: any) => Promise<{ data: PaginatedResponse<T> }>,
  ...apiArgs: Parameters<typeof apiMethod>
): Promise<number> {
  const response = await apiMethod(...apiArgs);
  return response.data.count ?? 0;
}

/**
 * Fetch a specific page of results.
 *
 * @param apiMethod - The API method from the generated client.
 * @param page - The page number to fetch.
 * @param apiArgs - Query parameters and optional request params.
 * @returns The paginated response for the requested page.
 *
 * @example
 * const page2Data = await getPaginatedPage(api.zaaktypeList, 2, {} as catalogi.ZaaktypeListParams);
 * console.log("Page 2 results:", page2Data.results);
 */
export async function getPaginatedPage<T>(
  apiMethod: (query: any, params?: any) => Promise<{ data: PaginatedResponse<T> }>,
  page: number,
  ...apiArgs: Parameters<typeof apiMethod>
): Promise<PaginatedResponse<T>> {
  const response = await apiMethod({ ...apiArgs[0], page }, apiArgs[1]);
  return response.data;
}

/**
 * Check if there is a next page available in a paginated response.
 *
 * @param response - The paginated response.
 * @returns `true` if there is a next page, `false` otherwise.
 *
 * @example
 * if (hasNextPage(pageData)) {
 *   console.log("There is a next page available!");
 * }
 */
export function hasNextPage<T>(response: PaginatedResponse<T>): boolean {
  return response.next !== null;
}

/**
 * Check if there is a previous page available in a paginated response.
 *
 * @param response - The paginated response.
 * @returns `true` if there is a previous page, `false` otherwise.
 *
 * @example
 * if (hasPreviousPage(pageData)) {
 *   console.log("There is a previous page available!");
 * }
 */
export function hasPreviousPage<T>(response: PaginatedResponse<T>): boolean {
  return response.previous !== null;
}