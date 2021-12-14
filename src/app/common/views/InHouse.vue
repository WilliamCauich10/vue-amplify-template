<template>
  <v-container fluid>
    <v-row justify="end">
      <v-col cols="11">
        <app-title
          :icon="false"
          title="Marketing InHouse"
          subtitle="Visualize and follow up for potential
          sales clients and membership upgrades. "
          subtitleB="To start select the property (Resort) to analyze"
          :subtitleMargin="false"
        />
      </v-col>
      <v-col cols="12">
        <categories-tab/>
      </v-col>
      <v-col cols="12">
        <grid/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppTitle from '@/app/common/components/SimpleComponent/AppTitle.vue';
import CategoriesTab from '@/app/modules/inhouse/components/CategoriesTab.vue';
import Grid from '@/app/modules/inhouse/components/Grid.vue';

@Component({
  name: 'InHouse',
  components: {
    CategoriesTab,
    AppTitle,
    Grid,
  },
})
export default class InHouse extends Vue {

}
</script>
