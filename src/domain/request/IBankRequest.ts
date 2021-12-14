import { SearchStatus } from '@/domain/enum/SearchStatus';

export interface IBankRequest {
  status: SearchStatus;
  includeSalesrooms: boolean;
  bankName: string;
  bankId: string;
}
