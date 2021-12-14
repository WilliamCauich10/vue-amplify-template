/**
 * @description     Cliente HTTP axios
 * @author          Christopher Gerardy Andrade Lazcano
 * @creationDate    02 de Noviembre de 2021
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IHttpClient } from '@/network/config/IHttpClient';
import { IPayload } from '@/network/config/IPayload';
import { IHttpAppResponse } from '@/network/utils/IHttpAppResponse';

/**
 * @description Clase para configurar y hacer peticiones HTTP con axios
 * @class
 * @implements {IHttpClient}
 */
export default class AxiosClient implements IHttpClient {
  private static instance: AxiosClient;

  /**
   * @description     Instancia de la clase para usar el patron singleton
   * @type AxiosInstance
   */
  private axios!: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.BASE_URL,
    });

    this.axios.interceptors.request.use((config: AxiosRequestConfig) => {
      console.log('set token');
      return config;
    });

    AxiosClient.instance = this;
  }

  /**
   * @description Metodo que devuelve una instancia de Axios Client usando el patron singleton
   * @return AxiosClient
   */
  public static getInstance(): AxiosClient {
    if (AxiosClient.instance) {
      return AxiosClient.instance;
    }
    return new AxiosClient();
  }

  /**
   * @description Hacer una peticion DELETE usando axios
   * @override delete
   * @param url {string}
   * @param payload {IPayload}
   * @return {Promise<AxiosResponse>}
   */
  delete(url: string, payload: IPayload): Promise<IHttpAppResponse> {
    return this.axios.delete(url, {
      data: payload.data,
      headers: payload.headers,
      params: payload.params,
    });
  }

  /**
   * @description Hacer una peticion GET usando axios
   * @override get
   * @param url {string}
   * @param payload {IPayload}
   * @return {Promise<AxiosResponse>}
   */
  get(url: string, payload: IPayload): Promise<IHttpAppResponse> {
    return this.axios.get(url, {
      headers: payload.headers,
      params: payload.params,
    });
  }

  /**
   * @description Hacer una peticion POST usando axios
   * @override post
   * @param url {string}
   * @param payload {IPayload}
   * @return {Promise<AxiosResponse>}
   */
  post(url: string, payload: IPayload): Promise<IHttpAppResponse> {
    return this.axios.post(url, payload.data, {
      headers: payload.headers,
      params: payload.params,
    });
  }

  /**
   * @description Hacer una peticion PUT usando axios
   * @override put
   * @param url {string}
   * @param payload {IPayload}
   * @return {Promise<AxiosResponse>}
   */
  put(url: string, payload: IPayload): Promise<IHttpAppResponse> {
    return this.axios.put(url, payload.data, {
      headers: payload.headers,
      params: payload.params,
    });
  }
}
