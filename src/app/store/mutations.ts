import { MutationTree } from 'vuex';
import { RootState } from '@/app/store/types/RootState';
import set from './common/set';

// const set = (property: any) => (store: any, payload: any) => {
//   store[property] = payload
// }

const mutations: MutationTree<RootState> = {
  isLoading: set('isLoading'),
};

export default mutations;
