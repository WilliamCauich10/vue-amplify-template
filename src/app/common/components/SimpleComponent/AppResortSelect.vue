<template>
  <v-select
    label="Resort"
    :items="items"
    outlined
    v-model="value"
    @change="onValueChange"
  />
</template>

<script lang="ts">

import { Component, Mixins } from 'vue-property-decorator';
import ModelBinding from '@/app/common/mixing/ModelBinding';

@Component({
  name: 'AppResortSelect',
})
export default class AppResortSelect extends Mixins<ModelBinding<string>>(ModelBinding) {
  private value = '';

  private items = [
    'Moon Palace Sunrise',
    'BP - Beach Palace',
  ];
}
</script>
