<template>
  <v-app>
    <!-- <app-loading/> -->
    <app-header @drawer="visibleDrawer" @ver="cerrarLoading"/>
    <app-drawer :visible="drawer" @drawer="visibleDrawer"/>
    <app-view/>
    <app-expansion-panel/>
    <app-loading :isLoading="loading" @cerrarLoading="cerrarLoading"/>
  </v-app>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import appHeader from '@/app/common/layout/AppHeader.vue';
import appDrawer from '@/app/common/layout/AppDrawer.vue';
import appView from '@/app/common/layout/AppView.vue';
import AppLoading from '@/app/common/layout/AppLoading.vue';
import AppExpansionPanel from '@/app/common/layout/AppExpansionPanel.vue';

@Component({
  name: 'DefaultContainer',
  components: {
    appHeader,
    appDrawer,
    appView,
    AppLoading,
    AppExpansionPanel,
  },
})
export default class DefaultContainer extends Vue {
  drawer = false;

  loading = false;

  visibleDrawer(value: boolean): void {
    this.drawer = value;
  }

  cerrarLoading(loading: boolean): void {
    this.loading = loading;
  }
}
</script>
