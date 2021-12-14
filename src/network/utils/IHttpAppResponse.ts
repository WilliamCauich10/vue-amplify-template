export interface IHttpAppResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText?: string;
  request?: any; // OPTIONAL
}

export interface IHttpAppError<T = unknown, D = any> extends Error {
  code?: string;
  request?: any;
  response?: IHttpAppResponse<T, D>;
}
