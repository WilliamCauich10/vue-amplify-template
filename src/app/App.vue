<template>
  <v-app>
    <v-main class="pa-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
});
</script>
