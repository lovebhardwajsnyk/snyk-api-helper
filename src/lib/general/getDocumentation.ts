import httpClient from '../utils/httpClient';
import { RequestOpts, ReturnData } from '../../types/types';
import getApiToken from '../utils/getApiToken';
import getRequestId from '../utils/getRequestId';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/general/the-api-details/general-api-documentation
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getDocs(opts: RequestOpts = {}): Promise<ReturnData> {
  const apiToken = getApiToken(opts);

  const client = httpClient(apiToken);

  let snykRequestId = null;

  try {
    const response = await client.get('');
    const httpCode = response.statusCode;
    snykRequestId = getRequestId(response.headers);

    return Promise.resolve({
      success: true,
      response: response.body,
      error: null,
      httpCode,
      snykRequestId,
    });
  } catch (error) {
    if (error.response) {
      const response = error.response;
      const httpCode = response.statusCode || 500;
      const responseBody = response.body || null;
      snykRequestId = getRequestId(response.headers);

      let message: string = "Something wen't wrong";
      if (httpCode == 404) {
        message = 'User not found!';
      } else if (httpCode == 400) {
        message = 'Bad request';
      } else if (httpCode == 401) {
        message = 'Invalid token or unauthorized to make the request';
      } else if (httpCode == 500) {
        message = 'Internal server error';
      }

      const err = new Error(message);
      return Promise.reject({
        success: false,
        response: responseBody,
        error: err,
        httpCode,
        snykRequestId,
      });
    }
    return Promise.reject({
      success: false,
      response: null,
      error: error,
      httpCode: 0,
      snykRequestId,
    });
  }
}
