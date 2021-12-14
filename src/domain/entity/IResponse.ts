import { IFailureModel } from './IFailureModel';

export interface IResponse <T> {
  data?: T;
  warning: IFailureModel[];
  error: IFailureModel[];
}
