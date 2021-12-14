import { API } from 'aws-amplify';
import _ from 'lodash';
import { IHttpClient } from '@/network/config/IHttpClient';
import { IPayload } from '@/network/config/IPayload';
import store from '../app/store/index';
import { IHttpAppResponse } from '@/network/utils/IHttpAppResponse';

export default class AmplifyClient implements IHttpClient {
  private static instance: AmplifyClient;

  private amplifyPayload = {
    headers: {},
    response: true,
  };

  constructor() {
    AmplifyClient.instance = this;

    API.configure({
      API: {
        endpoints: [
          {
            name: 'MyAPIGatewayAPI',
            endpoint: 'https://qolvv3jx5a.execute-api.us-east-2.amazonaws.com',
            custom_header: async () => ({ Authorization: store.state }),
          },
        ],
      },
    });
  }

  public static getInstance(): AmplifyClient {
    if (!AmplifyClient.instance) return new AmplifyClient();
    return AmplifyClient.instance;
  }

  delete(url: string, payload: IPayload): Promise<IHttpAppResponse> {
    return API.del('MyAPIGatewayAPI', url, _.merge(this.amplifyPayload, payload));
  }

  get(url: string, payload: IPayload): Promise<IHttpAppResponse> {
    return API.get('MyAPIGatewayAPI', url, _.merge(this.amplifyPayload, payload));
  }

  post(url: string, payload: IPayload): Promise<IHttpAppResponse> {
    return API.post('MyAPIGatewayAPI', url, _.merge(this.amplifyPayload, payload));
  }

  put(url: string, payload: IPayload): Promise<IHttpAppResponse> {
    return API.put('MyAPIGatewayAPI', url, _.merge(this.amplifyPayload, payload));
  }
}
