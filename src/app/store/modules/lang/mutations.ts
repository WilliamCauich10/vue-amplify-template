export default {
  setLocale(state: any, locale: string): void {
    state.locale = locale;
    localStorage.setItem('locale', locale);
  },
};
