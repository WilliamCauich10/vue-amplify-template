import { ErrorStatus } from '@/domain/enum/ErrorStatus';

export interface IFailureModel {
  code: string;
  category: ErrorStatus;
  msg: string;
}
