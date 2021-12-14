import { IExampleRepository } from '@/useCases/repository/IExampleRepository';
import HttpClient from '@/network/HttpClient';
import { IDummy } from '@/domain/entity/IDummy';
import URLFormatter from '../../network/utils/URLFormatter';
import { IResponse } from '@/domain/entity/IResponse';

export default class ExampleRepository extends URLFormatter implements IExampleRepository {
  constructor(private httpClient: HttpClient) {
    super();
    this.httpClient = httpClient;
  }

  getAllExamples(): Promise<IResponse<IDummy[]>> {
    return this.httpClient.get('/todos', {});
  }

  getSimpleExample(id: string): Promise<IResponse<IDummy>> {
    return this.httpClient.get(this.format('/todos/', { id }), {});
  }

  createAnExample(dummy: IDummy): Promise<IResponse<void>> {
    return this.httpClient.post('/todos', {
      data: dummy,
    });
  }

  updateExample(dummy: IDummy): Promise<IResponse<void>> {
    const url = this.format('/todos/:id', { id: dummy.id.toFixed() });

    return this.httpClient.put(url, {
      data: dummy,
    });
  }

  deleteExample(dummyId: IDummy['id']): Promise<IResponse<void>> {
    return this.httpClient.delete(`/todos/${dummyId}`, {});
  }

  getAmplifyExamples(): Promise<IResponse<IDummy[]>> {
    return this.httpClient.get('/dev/helloGet', {});
  }

  postAmplifyExample(dummy: IDummy): Promise<IResponse<void>> {
    return this.httpClient.post('/dev/helloPost', {
      data: dummy,
    });
  }

  deleteAmplifyExample(dummy: IDummy): Promise<IResponse<void>> {
    return this.httpClient.delete('/dev/helloDelete', {
      data: dummy,
    });
  }

  putAmplifyExample(dummy: IDummy): Promise<IResponse<void>> {
    return this.httpClient.put('/dev/helloPut', {
      data: dummy,
    });
  }
}
