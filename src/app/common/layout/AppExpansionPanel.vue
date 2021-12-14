<template>
<v-container fluid class="ma-0 pa-0">
  <v-navigation-drawer
      v-model="expansion"
      width="350px"
      app
      temporary
      floating
      overlay-opacity="0"
      class="mt-16"
  >
  <v-row class="mt-2" justify="center" align="center">
    <v-col cols="12" class="text-center"><h1 class="titulo_blue">{{Titulo}}</h1></v-col>
    <v-col cols="11">
      <p class="information">{{texto}}</p>
    </v-col>
    <v-col cols="5" class="text-center">
    </v-col>
  </v-row>
  </v-navigation-drawer>
  <div class="expansion absolute">
    <v-row @click="expansion = true" no-gutters class="ma-0 pa-0" justify="center" align="center">
      <v-icon class="flecha" color="white" size="25">mdi-menu-left</v-icon>
      <v-col class="text-center mr-1 pr-3" cols="12">Extraordinary Invitation</v-col>
    </v-row>
  </div>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'AppExpansionPanel',
})
export default class AppExpansionPanel extends Vue {
  expansion = false;

  Titulo = 'Lorem ipsum';

  texto = 'Lorem ipsum dolor sit amet consectetur adipiscing'
      + 'elit nisi molestie sagittis ante, semper suspendisse'
      + 'nunc facilisi leo nibh mattis donec class gravida fermentum cum,'
      + 'porttitor ornare cursus maecenas phasellus orci suscipit hac a tincidunt.'
      + 'Eu ut sapien fringilla mollis luctus vestibulum sodales nunc eget tellus,'
      + 'euismod penatibus ullamcorper urna dui aenean habitant neque.'
      + 'Conubia porttitor sodales cursus eros nibh purus erat accumsan praesent tristique,'
      + 'egestas auctor maecenas facilisi id a vehicula quisque nunc leo, per fringilla molestie'
      + 'rutrum scelerisque mus parturient curabitur pretium.';
}
</script>
