import { IDummy } from '@/domain/entity/IDummy';
import { IResponse } from '@/domain/entity/IResponse';

export interface IExampleRepository {
  getAllExamples(): Promise<IResponse<IDummy[]>>;
  getSimpleExample(id: string): Promise<IResponse<IDummy>>;
  createAnExample(dummy: IDummy) : Promise<IResponse<void>>;
  updateExample(dummy: IDummy): Promise<IResponse<void>>;
  deleteExample(dummyId: IDummy['id']): Promise<IResponse<void>>;
  getAmplifyExamples(): Promise<IResponse<IDummy[]>>;
  postAmplifyExample(dummy: IDummy): Promise<IResponse<void>>
  putAmplifyExample(dummy: IDummy): Promise<IResponse<void>>;
  deleteAmplifyExample(dummy: IDummy): Promise<IResponse<void>>;
}
