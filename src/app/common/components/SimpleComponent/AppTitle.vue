<template>
  <div class="my-3">
    <v-card-title class="mainTitle">
      <v-icon v-if="icon" :color="colorIcon" size="30">mdi-chevron-left</v-icon>
      {{title}}</v-card-title>
    <v-card-subtitle v-if="subtitleMargin" class="ml-2 mainSubtitulo">
      {{subtitle}}<b>{{subtitleB}}</b>
    </v-card-subtitle>
    <v-card-subtitle v-else class="mainSubtitulo">
      {{subtitle}}<b>{{subtitleB}}</b>
      </v-card-subtitle>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'AppTitle',
})
export default class AppTitle extends Vue {
  @Prop({
    type: String,
    default: 'Titulo',
  })
  title!: string;

  @Prop({
    type: String,
    default: 'Subtitulo',
  })
  subtitle!: string;

  @Prop({
    type: String,
    default: '',
  })
  subtitleB!: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  icon!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  subtitleMargin!: boolean;

  @Prop({
    type: String,
    default: '#43B4B4',
  })
  colorIcon!: string;
}
</script>
