<template>
  <!-- Para mostrar el menú del lado derecho o izquierdo,
        pasamos el valor de "isMobile" al atributo :right -->
  <v-navigation-drawer
    v-model="Drawer"
    color="primary"
    width="300px"
    app
    temporary
    floating
    right
  >
    <!--Botón de cerrar "x" -->
    <v-btn icon color="white" class="ma-2" @click.stop="Drawer = false">
      <v-icon>mdi-close</v-icon>
    </v-btn>
     <v-select prepend-inner-icon="mdi-crown-outline"
     class="select ml-5"
      dense solo label="Menu" >
     </v-select>
    <!-- Lista con Links del menú -->
    <v-list class="py-0">
      <v-list-item
        router
        :to="option.route"
        v-for="(option, i) in options"
        :key="i"
        class="px-0 list listHover"
        exact-path
        style="background: #4ba7c4"
      >
        <!-- <div class="grid grid-cols-12 gap-6 bg__secondary"> -->
            <v-list-item-icon class="ml-8">
              <v-icon color="white">
                {{option.icon}}
                </v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text subtitle-2">
              {{ $t(option.label) }}
            </v-list-item-title>
        <!-- </div> -->
      </v-list-item>
      <template>
        <v-row class="Logout mt-2">
          <v-btn text block x-large color="white">
            <v-icon class="ml-0">mdi-logout</v-icon>Cerrar Sesión</v-btn
          >
        </v-row>
        <v-row justify="center">
          <v-img
              max-width="45"
              width="45"
              src="@/app/assets/logo.svg"
              class="mt-16">
          </v-img>
        </v-row>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import {
  Component, Vue, Watch, Emit, Prop,
} from 'vue-property-decorator';
/* import {crown} from '../../assets/corona.svg';  */
/* ../../assets/icon_home/ */
@Component({
  name: 'AppDrawer',
  components: {

  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
  },
})
export default class GiftRegistry extends Vue {
  Drawer = false;

  options = [
    { label: 'DashBoard', icon: 'mdi-view-dashboard', route: '/dev/dashboard' },
  ];

  getLocale = 'en-US';

  getLocaleOptions = [
    { lang: 'es-MX', label: 'ESP', default: true },
    { lang: 'en-US', label: 'ENG', default: false },
  ];

  @Prop({
    type: Boolean,
    default: false,
  })
  visible!: boolean;

  @Emit()
  // eslint-disable-next-line class-methods-use-this
  drawer(value: boolean): boolean {
    return value;
  }

  @Watch('Drawer')
  onChangeDrawer(value: boolean): void {
    if (!value) {
      this.drawer(value);
    }
  }

  @Watch('visible')
  onChangeVisible(value: boolean): void {
    this.Drawer = value;
  }
}
</script>
