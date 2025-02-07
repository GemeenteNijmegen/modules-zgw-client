
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as jwt from 'jsonwebtoken';
import { CatalogiHttpClient } from '../CatalogiHttpClient';

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'mocked-jwt-token'),
}));

describe('CatalogiHttpClient', () => {
  let client: any;
  let mockAxios: any;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);

    client = new CatalogiHttpClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      baseUrl: 'https://mock-api.com',
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('should initialize with correct security token', () => {
    expect(jwt.sign).toHaveBeenCalledWith(
      {
        iss: 'test-client-id',
        iat: expect.any(Number),
        client_id: 'test-client-id',
      },
      'test-client-secret',
      { expiresIn: '1h' },
    );
    expect(client.securityData.token).toBe('mocked-jwt-token');
  });

  test('should send GET request with correct headers', async () => {
    mockAxios.onGet('/example-endpoint').reply(200, { data: 'success' });

    const response = await client.catalogiRequest({
      path: '/example-endpoint',
      method: 'GET',
      secure: true,
    });

    expect(response).toEqual({ data: 'success' });
    expect(mockAxios.history.get[0].headers.Authorization).toBe('Bearer mocked-jwt-token');
  });

  test('should refresh the token', () => {
    client.refreshToken();

    expect(jwt.sign).toHaveBeenCalledTimes(2); // Called once during initialization, once during refresh
    expect(client.securityData.token).toBe('mocked-jwt-token');
  });

  test('should handle POST request with JSON body', async () => {
    mockAxios.onPost('/post-endpoint').reply(201, { id: 1 });

    const response = await client.catalogiRequest({
      path: '/post-endpoint',
      method: 'POST',
      body: { name: 'test' },
      type: 'application/json',
      secure: true,
    });

    expect(response).toEqual({ id: 1 });
    expect(mockAxios.history.post[0].data).toBe(JSON.stringify({ name: 'test' }));
    expect(mockAxios.history.post[0].headers.Authorization).toBe('Bearer mocked-jwt-token');
  });

  test('should handle errors gracefully', async () => {
    mockAxios.onGet('/error-endpoint').reply(500, { error: 'Internal Server Error' });

    await expect(
      client.catalogiRequest({
        path: '/error-endpoint',
        method: 'GET',
        secure: true,
      }),
    ).rejects.toThrow();

    expect(mockAxios.history.get[0].headers.Authorization).toBe('Bearer mocked-jwt-token');
  });

  test('should merge request parameters correctly', async () => {
    mockAxios.onGet('/merged-params').reply(200, { result: 'ok' });

    const response = await client.catalogiRequest({
      path: '/merged-params',
      method: 'GET',
      headers: { 'X-Custom-Header': 'custom-value' },
    });

    expect(response).toEqual({ result: 'ok' });
    expect(mockAxios.history.get[0].headers['X-Custom-Header']).toBe('custom-value');
    expect(mockAxios.history.get[0].headers.Authorization).toBe('Bearer mocked-jwt-token');
  });
});
