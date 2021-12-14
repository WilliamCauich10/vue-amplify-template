export default {
  // Establecemos el "locale" por defecto, en caso de no encontrar una definición en el lenguaje
  // que el usuario seleccione
  fallbackLocale: 'es-MX',
  // Establecemos el locale actual
  locale: 'es-MX',
  silentTranslationWarn: true,
  // Definiciones para fechas
  dateTimeFormats: {
    'es-MX': {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
    'en-US': {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
  },
  // Definiciones para currency
  numberFormats: {
    'es-MX': {
      currency: {
        style: 'currency',
        currency: 'MXN',
        currencyDisplay: 'symbol',
      },
      'en-US': {
        currency: {
          style: 'currency',
          currency: 'USD',
          currencyDisplay: 'symbol',
        },
      },
    },
  },
};
