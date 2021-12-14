/**
 * @description Payload estandar para setear una peticion HTTP
 * @author Christopher Gerardy Andrade Lazcano
 * @since 02 de Noviembre de 2021
 */
export interface IPayload {
  /**
   * @interface
   * @param data Estructura de datos o elemento data de una respuesta HTTP
   * @param headers son los encabezados dentro de un cliente que hara una peticion HTTP
   * @param params son los query params que se enviaran en una peticion HTTP
   */
  data?: any;
  headers?: any;
  params?: any;
}
