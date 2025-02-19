import type { ParsedRoute, Hooks } from 'swagger-typescript-api';

export const partialInputHook: Partial<Hooks> = {
  onCreateRoute: (routeData: ParsedRoute): ParsedRoute => {
    // Get the method from either routeData.raw.method or routeData.request.method
    const method =
      routeData.raw?.method?.toLowerCase() ||
      routeData.request?.method?.toLowerCase();

    // If there is no method, handle it  with a warn
    if (!method) {
      console.warn(
        `[partialInputHook] No HTTP method found for route "${routeData.routeName?.usage}".`,
      );
    }

    if (['post', 'put', 'patch'].includes(method)) {
      // Cast request to a minimal inline type with `payload` It exists after checking logs.
      const { payload } = routeData.request as unknown as {
        payload?: { name: string; optional: boolean; type: string };
      };

      if (!payload || typeof payload.type !== 'string') {
        // Make sure we see more easily what went wrong in generating the client with Partials.
        // Instead of throwing, we skip Partial-wrapping and warn:
        console.warn(
          `[partialInputHook] Missing or invalid payload type for ${method.toUpperCase()} route: "${routeData.routeName?.usage}". Skipping Partial wrapping.`,
        );
        return routeData;
      }

      const oldType = payload.type;
      if (!oldType.startsWith('Partial<')) {
        payload.type = `Partial<${oldType}>`;
        if (process.env.DEBUG === 'TRUE') {
          console.debug(
            `[partialInputHook] (${method.toUpperCase()}) route "${routeData.routeName?.usage}"` +
              ` -> payload type "${oldType}" => "Partial<${oldType}>"`,
          );
        }
      }
    }

    return routeData;
  },
};