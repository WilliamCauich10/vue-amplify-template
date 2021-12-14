<template>
  <v-btn class="btn-primary" disabled x-large block>
      {{title}}
  </v-btn>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Button',
})
export default class Button extends Vue {
@Prop({
  type: String,
})
  title! : string
}
</script>
