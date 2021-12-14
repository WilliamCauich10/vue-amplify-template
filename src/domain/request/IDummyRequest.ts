import { IDummy } from '@/domain/entity/IDummy';

export interface IDummyRequest {
  dummy: IDummy;
  lsHoursDif: number;
  changedBy: string;
  addedItems: any;
  items: any;
}
