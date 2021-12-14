<template>
<v-container class="pa-0 ma-0">
<v-row justify="center">
  <v-col cols="10">
    <v-breadcrumbs
      :items="items"
      divider=">"
    >
     <template v-slot:divider>
       <v-icon>mdi-chevron-right</v-icon>
     </template>
     <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
         <span>
          {{ item.text }}
         </span>
        </v-breadcrumbs-item>
     </template>
    </v-breadcrumbs>
  </v-col>
</v-row>
</v-container>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

@Component({
  name: 'BreadCrumb',
})
export default class BreadCrumb extends Vue {
  @Prop({
    required: true,
  })
  items!: Array<string>;
}
</script>
