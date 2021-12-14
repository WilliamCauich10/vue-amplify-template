<template>
  <v-container fluid class="fill-height" style="height: calc(100vh - 8em)">
    <v-row class="mt-3" justify="center" align="center">
      <h1>DASHBOARD</h1>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dashboard',

  components: {
    // contact,
  },
  data: () => ({
    show: true,
  }),
  methods: {
  },
});
</script>
