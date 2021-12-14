<template>
  <v-menu :close-on-content-click="false" transition="scale-transition" offset-y>
    <template v-slot:activator="{ on }">
      <v-text-field
        :label="title"
        v-model="fecha"
        :disabled="Disabled"
        v-on="on"
        outlined
        :hide-details="HideDetails"
        append-icon="mdi-calendar-month"
        dense
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="fecha" @change="dateSelected(fecha)"
      :max="maxDate" no-title scrollable dense/>
  </v-menu>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Emit,
} from 'vue-property-decorator';

@Component({
  name: 'AppDate',
})

export default class AppDate extends Vue {
  @Prop({
    type: String,
    default: 'Fecha',
  })
  title!: string

  @Prop({
    type: String,
    default: '',
  })
  maxDate!: string;

  @Prop({
    type: String,
    default: '',
  })
  minDate!: string;

  @Prop({
    type: String,
    default: '',
  })
  defaultDate!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  Disabled!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  HideDetails!: boolean;

  fecha = '';

  @Emit()
  // eslint-disable-next-line class-methods-use-this
  dateSelected(date: string): string {
    return date;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.fecha = this.defaultDate;
  }
}
</script>
