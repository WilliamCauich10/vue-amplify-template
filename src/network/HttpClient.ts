/**
 * @description     Wrapper central de peticiones a un API con axios o amplify
 * @author          Christopher Gerardy Andrade Lazcano
 * @creationDate    02 de Noviembre de 2021
 */
import { IHttpClient } from '@/network/config/IHttpClient';
import { IPayload } from '@/network/config/IPayload';
import { IHttpClientWrapper } from '@/network/config/IHttpClientWrapper';
import IHttpResponseHandler from './config/IHttpResponseHandler';
import AmplifyClient from './AmplifyClient';
import AxiosClient from './AxiosClient';
import { IResponse } from '@/domain/entity/IResponse';

/**
 * Clase HttpClient para hacer peticiones HTTP por medio de un cliente [AXIOS, AMPLIFY]
 * @class
 * @implements {IHttpClientWrapper, IHttpResponseHandler}
 */
export default class HttpClient extends IHttpResponseHandler implements IHttpClientWrapper {
  private readonly httpClient!: IHttpClient;

  constructor() {
    super();
    if (process.env.httpClient !== 'axios') {
      this.httpClient = AmplifyClient.getInstance();
    } else {
      this.httpClient = AxiosClient.getInstance();
    }
  }

  /**
   * Hacer una peticion DELETE usando un cliente HTTP y parceando la respuesta
   * @param url {string}
   * @param payload {IPayload}
   * @override delete
   * @return {Promise<IResponse<any>>}
   */
  async delete(url: string, payload: IPayload): Promise<IResponse<any>> {
    return this.commitRequest(this.httpClient.delete(url, payload));
  }

  /**
   * Hacer una peticion GET usando un cliente HTTP y parceando la respuesta
   * @param url {string}
   * @param payload {IPayload}
   * @override get
   * @return {Promise<IResponse<any>>}
   */
  async get(url: string, payload: IPayload): Promise<IResponse<any>> {
    return this.commitRequest(this.httpClient.get(url, payload));
  }

  /**
   * Hacer una peticion POST usando un cliente HTTP y parceando la respuesta
   * @param url {string}
   * @param payload {IPayload}
   * @override post
   * @return {Promise<IResponse<any>>}
   */
  async post(url: string, payload: IPayload): Promise<IResponse<any>> {
    return this.commitRequest(this.httpClient.post(url, payload));
  }

  /**
   * Hacer una peticion PUT usando un cliente HTTP y parceando la respuesta
   * @param url {string}
   * @param payload {IPayload}
   * @override put
   * @return {Promise<IResponse<any>>}
   */
  async put(url: string, payload: IPayload): Promise<IResponse<any>> {
    return this.commitRequest(this.httpClient.put(url, payload));
  }
}
