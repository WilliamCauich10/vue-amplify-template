<template>
  <v-select
    label="Promotor o Guest Service"
    outlined
    v-model="value"
    placeholder="Search and select your user"
    :items="options"
    @change="onValueChange"
  />
</template>

<script lang="ts">

import { Component, Mixins } from 'vue-property-decorator';
import ModelBinding from '@/app/common/mixing/ModelBinding';

@Component({
  name: 'AppPrSelect',
})
export default class AppPrSelect extends Mixins<ModelBinding<string>>(ModelBinding) {
  private value = '';

  private options = [
    'PO12359 | Juan Pérez',
    'Miguel Leo Rodríguez',
  ];
}
</script>
