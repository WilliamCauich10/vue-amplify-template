export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getLocale(state: any): string {
    let locale = localStorage.getItem('locale');
    locale = locale && locale !== '' && locale !== 'undefined' ? locale : navigator.language;
    if (locale.includes('en')) return 'en-US';
    if (locale.includes('es')) return 'es-MX';
    return state.locale;
  },
};
