export default {
  init({ getters, commit }: any): void {
    const locale = getters.getLocale;
    commit('setLocale', locale);
  },
};
