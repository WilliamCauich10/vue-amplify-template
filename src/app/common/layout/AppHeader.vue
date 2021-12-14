<template>
  <!-- <v-app-bar app flat dark v-if="isMobile && barTemplate">
    <router-link to="/general/dashboard">
      <v-img
        max-width="200px"
        width="200px"
        src="@/app/assets/logo_clever_ventas_mobile.png"/>
    </router-link>
    <v-spacer/>
    <v-app-bar-nav-icon @click="drawer()"/>
  </v-app-bar> -->

 <v-app-bar app flat dark v-if="!isMobile && barTemplate">
    <router-link to="/">
      <v-img
        width="45"
        src="@/app/assets/logo.svg" />
    </router-link>
    <v-spacer/>
    <v-btn v-if="false" @click="barTemplate = !barTemplate">test</v-btn>
    <v-btn v-if="false" @click="ver()">test</v-btn>
    <avatar username="Pedrito Sola"/>
    <v-app-bar-nav-icon @click="drawer()"/>
  </v-app-bar>

  <v-app-bar
    app
    flat
    dark
    v-else-if="$route.path === '/app-christopher'"
    extended
    class="px-0"
    extension-height="80"
  >
    <div class="v-app-bar d-flex align-center w100">
      <router-link to="/">
        <v-img
          width="78px"
          height="50px"
          max-width="78px"
          src="@/app/assets/logo.svg"/>
      </router-link>
      <v-spacer/>
      <v-btn v-if="false" @click="barTemplate = !barTemplate">test</v-btn>
      <v-btn v-if="false" @click="ver()">test</v-btn>
      <avatar username="Christopher Gerardy"/>
      <v-app-bar-nav-icon @click="drawer()"/>
    </div>

    <template v-slot:extension>
      <div class="ext-toolbar py-2">
        <v-btn icon>
          <v-icon>mdi-file-search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-file-pdf-box</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-file-replace</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-file-sync</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-file-table-outline</v-icon>
        </v-btn>

        <div class="max-input-size">
          <v-text-field
            outlined
            dense
            hide-details
            light
            background-color="white"
            disabled
            value="60%"
            class="centered-input"
          />
        </div>

        <v-btn icon>
          <v-icon>mdi-file-search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-file-pdf-box</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-file-replace</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-file-sync</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-file-table-outline</v-icon>
        </v-btn>
      </div>
    </template>
  </v-app-bar>

  <v-app-bar app flat dark v-else>
    <v-app-bar-nav-icon @click="drawer()"></v-app-bar-nav-icon>
    <v-list-item two-line>
      <v-avatar>
        <img src="https://randomuser.me/api/portraits/women/40.jpg"/>
      </v-avatar>
      <v-list-item-content class="ml-3">
        <v-list-item-title>Pedrito Sola</v-list-item-title>
        <v-list-item-subtitle>Agente</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-spacer/>
    <router-link to="/">
      <v-img src="@/app/assets/logo.svg" width="45"/>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import {
  Component, Vue, Emit,
} from 'vue-property-decorator';
import Avatar from '../components/SimpleComponent/AppAvatar.vue';

@Component({
  name: 'AppHeader',
  components: {
    Avatar,
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
  },
})
export default class GiftRegistry extends Vue {
  // isMenuVisible= true;

  options = [];

  barTemplate = true;

  @Emit()
  // eslint-disable-next-line class-methods-use-this
  drawer(): boolean {
    return true;
  }

  @Emit()
  // eslint-disable-next-line class-methods-use-this
  ver(): boolean {
    return true;
  }
}
</script>
<style scoped>
.w100 {
  width: 100%;
}

.v-toolbar__extension {
  /* padding: 0;
  margin-top: 8px; */
}

.ext-toolbar {
  width: 100%;
  padding: 0 8%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b7b7b7;
}

.max-input-size {
  max-width: 64px;
}

.centered-input input {
  text-align: center
}

</style>
