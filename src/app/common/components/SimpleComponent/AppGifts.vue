<template>
  <v-select
    v-model="gift"
    :disabled="Disabled"
    outlined
    :return-object="ReturnObject"
    :label="Label"
    :items="regalos"
    item-text="gifName"
    @change="emitirGifts(gift)"
  />
</template>
<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

  @Component({
    name: 'AppGifts',
  })
export default class AppPromotores extends Vue {
  @Prop({
    type: String,
    default: '',
  })
  Label!: string

  @Prop({
    type: Boolean,
    default: false,
  })
  ReturnObject!: boolean

  @Prop({
    type: Boolean,
    default: false,
  })
  Disabled!: boolean

  regalos = {};

  gift = {};

  Gift(data: any): void {
    this.$emit('Gift', data); // Pasar a forma elegante
  }

  cargaRegalos(): void {
    this.regalos = [
      {
        gifId: '01 CHANKAA',
        gifName: '01 Chankaanab Con Snorquel Adulto',
        gifShortName: '01 CHANKAA',
        gifSisTur: '1CHANKAANABADULTO',
      },
      {
        gifId: '$500SPACPE',
        gifName: '$500 Pesos Spa Credit',
        gifShortName: '$500SPACPE',
        gifSisTur: '',
      },
    ];
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.cargaRegalos();
  }
}
</script>
