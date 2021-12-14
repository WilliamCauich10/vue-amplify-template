import { ActionTree } from 'vuex';
import { RootState } from '@/app/store/types/RootState';

const actions: ActionTree<RootState, any> = {
  /**
   * Inicializa el STATE. Este método debe ser llamando tan pronto se cree el
   * componente de Vue, en la aplicación principal.
   * @see main.js
   */
  init({ dispatch }) {
    return Promise.all([dispatch('auth/init'), dispatch('i18n/init')]);
  },

  /**
   * Establece el valor de la bandera isLoading=true
   */
  initLoader({ commit }) {
    // Ejecuta la mutación para establecer el valor de la
    // propiedad isLoading=true
    commit('isLoading', true);
  },
  /**
   * Establece el valor de la bandera isLoading=false
   */
  stopLoader({ commit }) {
    // Ejecuta la mutación para establecer el valor de la
    // propiedad isLoading=false
    commit('isLoading', false);
  },
};

export default actions;
