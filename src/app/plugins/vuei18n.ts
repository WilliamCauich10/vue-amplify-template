import Vue from 'vue';
import VueI18n from 'vue-i18n';
import vueI18nFormats from '@/app/locales/app.formats';

Vue.use(VueI18n);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default new VueI18n(vueI18nFormats);
