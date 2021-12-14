/**
 * @description Interface de Wrapper que consume diferentes clientes HTTP
 * @author Christopher Gerardy Andrade Lazcano
 * @since 02 de Noviembre de 2021
 */
import { IPayload } from '@/network/config/IPayload';
import { IResponse } from '@/domain/entity/IResponse';
/**
 * @see IResponse
 * @description Interfaz con metodos HTTP y transoformacion a respuesta estandar
 * @interface
 */
export interface IHttpClientWrapper {
  /**
   * @description Crea una peticion GET haciendo uso de un cliente HTTP
   * @param url {string}
   * @param payload {IPayload}
   * @return Promise<IResponse<any>>
   */
  get(url: string, payload: IPayload): Promise<IResponse<any>>;
  /**
   * @description Crea una peticion POST haciendo uso de un cliente HTTP
   * @param url {string}
   * @param payload {IPayload}
   * @return Promise<IResponse<any>>
   */
  post(url: string, payload: IPayload): Promise<IResponse<any>>;
  /**
   * @description Crea una peticion PUT haciendo uso de un cliente HTTP
   * @param url {string}
   * @param payload {IPayload}
   * @return Promise<IResponse<any>>
   */
  put(url: string, payload: IPayload): Promise<IResponse<any>>;
  /**
   * @description Crea una peticion DELETE haciendo uso de un cliente HTTP
   * @param url {string}
   * @param payload {IPayload}
   * @return Promise<IResponse<any>>
   */
  delete(url: string, payload: IPayload): Promise<IResponse<any>>;
}
