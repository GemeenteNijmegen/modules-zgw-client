import * as jwt from 'jsonwebtoken';
import { HttpClient, FullRequestParams } from '../catalogi-generated-client';

export interface SecurityDataType {
  token: string;
}
export interface CatalogiHttpClientConfig {
  clientId: string;
  clientSecret: string;
  baseUrl?: string;
}

export class CatalogiHttpClient extends HttpClient<SecurityDataType> {
  private clientId: string;
  private clientSecret: string;

  constructor(config: CatalogiHttpClientConfig) {
    const { clientId, clientSecret, baseUrl } = config;
    const securityWorker = async (securityData: SecurityDataType | null) => {
      if (securityData?.token) {
        return {
          headers: {
            Authorization: `Bearer ${securityData.token}`,
          },
        };
      }
      return {};
    };

    super({
      baseURL: baseUrl || 'https://default-api-url.com', // Set a default base URL
      securityWorker,
      format: 'json', // Response format
    });

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.setSecurityData({ token: this.createToken() });
  }

  /**
   * Generates a new JWT token for authentication.
   */
  private createToken(): string {
    return jwt.sign(
      {
        iss: this.clientId,
        iat: Math.floor(Date.now() / 1000),
        client_id: this.clientId,
        user_id: this.clientId,
        user_representation: this.clientId,
      },
      this.clientSecret,
      { expiresIn: '12h' }, // Set token expiration to 12 hours
    );
  }

  /**
 * Wrapper for the request method with additional logging or custom logic if needed.
 */
  public async catalogiRequest<T = any>(params: FullRequestParams): Promise<T> {
    try {
      console.debug('Sending custom request with params:', params);

      // Default headers catalogi zgw
      const defaultHeaders = {
        'Content-Crs': 'EPSG:4326',
        'Accept-Crs': 'EPSG:4326',
      };

      // Always enforce `secure` unless explicitly set to false
      const response = await this.request<T>({
        ...params,
        // Default secure to true unless explicitly disabled, otherwise it removes authorization header
        secure: params.secure !== false,
        headers: {
          ...defaultHeaders, // Include default headers
          ...(params.headers || {}), // Merge with any custom headers provided in the params
        },
      });

      console.debug('Custom request succeeded with response:', response);
      return response.data;
    } catch (error) {
      console.error('Custom request failed:', error);
      throw error;
    }
  }
}
