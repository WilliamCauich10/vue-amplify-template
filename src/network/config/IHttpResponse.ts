/**
 * @description Respuesta estandar para peticiones HTTP
 * @author Christopher Gerardy Andrade Lazcano
 * @since 02 de Noviembre de 2021
 */
export interface IHttpResponse<T> {
  /**
   * @interface
   * @param <T> Esctructura de datos que se esperan de la peticion http
   * @param data Estructura de datos o elemento data de una respuesta HTTP
   * @param status Codigo de estatus de la respuesta HTTP
   * @param errors Errores que puede lanzar la peticion HTTP
   */
  data?: T;
  status: string;
  errors?: string[];
}
