import { partialInputHook } from '../partialInputHook';

describe('partialInputHook', () => {
  beforeEach(() => {
    // Prevent console output from cluttering the test logs
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'debug').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('wraps the request payload type in Partial<> for POST if not already partial', () => {
    const mockRouteData: any = {
      raw: { method: 'POST' },
      routeName: { usage: 'besluittypeCreate' },
      request: {
        payload: {
          name: 'data',
          optional: false,
          type: 'BesluitType',
        },
      },
    };

    const result = partialInputHook.onCreateRoute!(mockRouteData) as any;

    expect(result.request.payload.type).toBe('Partial<BesluitType>');
  });

  it('does nothing if the type is already partial', () => {
    const mockRouteData: any = {
      raw: { method: 'POST' },
      routeName: { usage: 'besluittypeCreate' },
      request: {
        payload: {
          name: 'data',
          optional: false,
          type: 'Partial<BesluitType>',
        },
      },
    };

    const result = partialInputHook.onCreateRoute!(mockRouteData) as any;

    // Should remain unchanged
    expect(result.request.payload.type).toBe('Partial<BesluitType>');
  });

  it('does nothing for GET routes', () => {
    const mockRouteData: any = {
      raw: { method: 'GET' },
      routeName: { usage: 'besluittypeList' },
      request: {
        payload: {
          name: 'data',
          optional: false,
          type: 'BesluitType',
        },
      },
    };

    const result = partialInputHook.onCreateRoute!(mockRouteData) as any;

    // No wrapping in Partial, so it stays the same
    expect(result.request.payload.type).toBe('BesluitType');
  });

  it('warns and skips Partial-wrapping if payload is missing for a POST route', () => {
    const mockRouteData: any = {
      raw: { method: 'POST' },
      routeName: { usage: 'besluittypePublish' },
      request: {},
    };

    const result = partialInputHook.onCreateRoute!(mockRouteData) as any;

    // The hook should have warned and returned the routeData unchanged
    // Since there's no payload, we expect the request object to remain empty
    expect(result.request).toEqual({});
    expect(console.warn).toHaveBeenCalledWith(
      '[partialInputHook] Missing or invalid payload type for POST route: "besluittypePublish". Skipping Partial wrapping.',
    );
  });
});