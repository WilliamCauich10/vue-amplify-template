/**
 * @description Clase para transformar las respuestas del tipo externas a internas
 * @author Christopher Gerardy Andrade Lazcano
 * @since 02 de Noviembre de 2021
 */

import { IHttpAppError, IHttpAppResponse } from '@/network/utils/IHttpAppResponse';
import { IResponse } from '@/domain/entity/IResponse';
import { ErrorStatus } from '../../domain/enum/ErrorStatus';

export default abstract class IHttpResponseHandler {
  /**
   * @description Metodo que transforma una respuesta especifica a una general
   * @param response {IHttpAppResponse<any>}
   * @return IResponse<any>
   */
  // eslint-disable-next-line class-methods-use-this
  private transform(response: IHttpAppResponse<any>): IResponse<any> {
    switch (response.status) {
      case 200:
        return {
          data: response.data,
          error: [],
          warning: [],
        };

      case 201:
        return {
          data: response.data,
          error: [],
          warning: [],
        };

      case 404:
        return {
          data: null,
          warning: [],
          error: [{
            code: '404',
            category: ErrorStatus.RESOURCE,
            msg: 'NOT FOUNT',
          }],
        };

      case 403:
        return {
          data: null,
          warning: [],
          error: [{
            code: '403',
            msg: 'Forbidden',
            category: ErrorStatus.AUTHORIZATION,
          }],
        };

      case 500:
        return {
          data: null,
          warning: [],
          error: [{
            code: '500',
            msg: 'Internal server error',
            category: ErrorStatus.INTERNAL_ERROR,
          }],
        };

      default:
        return {
          data: null,
          warning: [],
          error: [{
            code: '400',
            msg: 'Bad Request',
            category: ErrorStatus.RESOURCE,
          }],
        };
    }
  }

  // eslint-disable-next-line class-methods-use-this
  protected handleAxiosErrors(response: IHttpAppResponse): IResponse<any> {
    return this.transform({
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  protected handleAmplifyErrors(response: IHttpAppResponse): IResponse<any> {
    return this.transform({
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    });
  }

  protected async commitRequest(
    response: Promise<IHttpAppResponse<any>>,
  ): Promise<IResponse<any>> {
    try {
      const result = await response;
      return this.transform(result);
    } catch (e) {
      // TODO: MAKE ERROR HANDLER
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      // return this.handleAxiosErrors(error.response!);
      return this.transform((e as IHttpAppError).response!);
    }
  }
}
