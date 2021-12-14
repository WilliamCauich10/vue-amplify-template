<template>
  <v-main fluid>
      <app-bread-crumb :items="items"/>
    <router-view />
  </v-main>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import AppBreadCrumb from '@/app/common/layout/AppBreadCrumb.vue';

@Component({
  name: 'AppView',
  components: {
    AppBreadCrumb,
  },
})
export default class AppView extends Vue {
  items = [
    {
      text: 'Dashboard',
      disabled: false,
      href: 'breadcrumbs_dashboard',
    },
    {
      text: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1',
    },
    {
      text: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2',
    },
  ];
}
</script>
