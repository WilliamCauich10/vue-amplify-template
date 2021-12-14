<template>
  <v-menu
    ref="menu"
    v-model="show"
    :close-on-content-click="false"
    :return-value.sync="value"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="value"
        label="Picker in menu"
        outlined
        append-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
      />
    </template>

    <v-time-picker
      v-model="value"
      @click:minute="$refs.menu.save(value)"
      @change="onValueChange"
    />
  </v-menu>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import ModelBinding from '@/app/common/mixing/ModelBinding';

@Component({
  name: 'AppTimePicker',
})
export default class AppTimePicker extends Mixins<ModelBinding<string>>(ModelBinding) {
  value = '';

  show = false;
}
</script>
