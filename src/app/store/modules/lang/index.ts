import { Module } from 'vuex';
import state from '@/app/store/modules/lang/state';
import mutations from '@/app/store/modules/lang/mutations';
import actions from '@/app/store/modules/lang/actions';
import getters from '@/app/store/modules/lang/getters';
import { LangState } from '@/app/store/modules/lang/types/LangState';

const LangModule: Module<LangState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default LangModule;
