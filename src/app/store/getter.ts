import { GetterTree } from 'vuex';
import { RootState } from '@/app/store/types/RootState';

const getters: GetterTree<RootState, any> = {
  isLoading: (state) => state.isLoading,
  getBuild: (state) => state.build,
};

export default getters;
