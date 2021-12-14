import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/src/locale/es';
import '@mdi/font/css/materialdesignicons.css';
import '@/app/assets/sass/index.scss';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    default: 'dark',
    disable: false,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#274c69',
        secondary: '#424242',
        accent: '#43B4B4',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        blue_secondary: '#43B4B4',
      },
      dark: {
        secundary: '#29B45B',
        danger: '#FF4115',
        primary: '#2E3841',
        warning: '#FF9C00',
        orange: '#FEA00E',
        success: '#00A73C',
      },
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
});
