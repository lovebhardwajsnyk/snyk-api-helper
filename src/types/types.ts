import { HttpError } from 'errors/errors';

export interface httpErrorData {
  message: string;
  statusCode: number;
}

export interface ReturnData {
  success: boolean;
  response: any;
  error: HttpError | Error | null;
  httpCode: number;
  snykRequestId: string | null;
}

export interface ReqOpts {
  apiToken?: string;
  baseUrl?: string;
  baseApiPath?: string;
  requestBody?: any;
  queryParams?: any;
}

export interface ListDepsQueryParams {
  sortBy?: string;
  order?: string;
  page?: string | number;
  perPage?: string | number;
}

export interface ListDepsReqOpts extends ReqOpts {
  queryParams?: ListDepsQueryParams;
}

export interface ClientOpts {
  apiToken?: string;
  baseUrl?: string;
  baseApiPath?: string;
}

export const enum RequestMethod {
  GET,
  POST,
  PUT,
  DELETE,
}
