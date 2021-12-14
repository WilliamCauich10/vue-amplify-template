<template>
  <!-- CONTENIDO -->
  <v-container
    class="fill-height ma-0 pa-0"
    fluid
    no-gutters
  >

    <v-col class="primary fill-height d-none d-sm-block pr-bg"></v-col>
    <v-col
      cols="12"
      sm="6"
      md="5"
      lg="4"
      class="fill-height pa-0"
      align="center"
      justify="center"
    >
      <slot></slot>
    </v-col>
  </v-container>
</template>
<script>
// Internacionalización. Para la presentación de mensajes en diferentes idiomas

export default {
  // Asignamos los mensajes del módulo al framework i18n, para el manejo del idioma
  components: {
    // Incluimos el layout que utilizará este módulo
    // Layout
  },
  data() {
    return {
      moduleName: 'ANONIMOUS_LAYOUT',
    };
  },
  methods: {},
};
</script>
