import { IHttpURLParams } from '@/network/config/IHttpURLParams';

export default abstract class URLFormatter {
  // eslint-disable-next-line class-methods-use-this
  format(url: string, params?: IHttpURLParams): string {
    if (!params) return url;

    Object.keys(params).forEach((key: string) => {
      const pattern = RegExp(`:${key}`, 'g');
      url.replace(pattern, params[key]);
    });

    return url;
  }
}
