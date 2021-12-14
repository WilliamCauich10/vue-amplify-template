<template>
  <v-select
    :disabled="Disabled"
    outlined
    v-model="selecPromotor"
    :label="Label"
    :items="promotores"
    item-text="personnelName"
    item-value="personnelId"
    :return-object="ReturnObject"
    @change="emitPromotor(selecPromotor)"
  >
    <template
      slot="item"
      slot-scope="data"
    >
      {{ `${data.item.personnelId} | ${data.item.personnelName}` }}
    </template>
  </v-select>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

@Component({
  name: 'AppPromotores',
})
export default class AppPromotores extends Vue {
  @Prop({
    type: String,
    default: 'Promotor o Guest Service',
  })
  Label!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  ReturnObject!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  Disabled!: boolean;

  promotores = [{}];

  selecPromotor = {};

  cargaPromotores(): void {
    this.promotores = [
      {
        personnelId: 'CHCHAN',
        personnelName: 'Chelsea Roxanna Chan Araujo',
        personnelSalesRoom: 'MP',
        personnelLeadSources: 'AS',
      },
      {
        personnelId: '101',
        personnelName: 'Luis Alberto Bravo Arriola',
        personnelSalesRoom: 'ZCJG',
        personnelLeadSources: 'AVIS',
      },
    ];
  }

  emitPromotor(data: any): void{
    this.$emit('Promotor', data); // pasar a modo elegante
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.cargaPromotores();
  }
}
</script>
