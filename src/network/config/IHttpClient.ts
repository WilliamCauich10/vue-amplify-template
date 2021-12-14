/**
 * @description Interface de Cliente crear peticiones HTTP estandar
 * @author Christopher Gerardy Andrade Lazcano
 * @since 02 de Noviembre de 2021
 */
import { IPayload } from '@/network/config/IPayload';
import { IHttpAppResponse } from '@/network/utils/IHttpAppResponse';
/**
 * @description Interface para mapero de los diferentes verbos HTTP en la app
 * @interface
 */
export interface IHttpClient {
  /**
   * @description Crea una peticion GET y retornar una promesa de {AxiosResponse}
   * @param url {string}
   * @param payload {IPayload}
   * @return Promise<AxiosResponse>
   */
  get(url: string, payload: IPayload): Promise<IHttpAppResponse>;
  /**
   * @description Crea una peticion POST y retornar una promesa de {AxiosResponse}
   * @param url {string}
   * @param payload {IPayload}
   * @return Promise<AxiosResponse>
   */
  post(url: string, payload: IPayload): Promise<IHttpAppResponse>;
  /**
   * @description Crea una peticion PUT y retornar una promesa de {AxiosResponse}
   * @param url {string}
   * @param payload {IPayload}
   * @return Promise<AxiosResponse>
   */
  put(url: string, payload: IPayload): Promise<IHttpAppResponse>;
  /**
   * @description Crea una peticion DELETE y retornar una promesa de {AxiosResponse}
   * @param url {string}
   * @param payload {IPayload}
   * @return Promise<AxiosResponse>
   */
  delete(url: string, payload: IPayload): Promise<IHttpAppResponse>;
}
