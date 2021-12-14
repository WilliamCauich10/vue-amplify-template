<template>
  <div>
    <v-container>
      <v-data-table
        :items="data"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        :hide-default-footer="true"
        fixed-header
        height="450px"
        item-key="name"
        class="elevation-1 table__grid"
        dense
      >
        <template slot="header">
          <thead>
            <tr>
              <th
                v-for="h in headers.data"
                :class="h.class"
                :key="h.name"
                :width="h.width"
                :name="h.name"
              >
          <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <v-icon class='icon__header' size="23">mdi-sort-variant</v-icon> {{ h.title }}
                </span>
             </template>
          <span>{{ h.toolTip}}</span>
          </v-tooltip>
              </th>
            </tr>
          </thead>
        </template>
        <template v-slot:item="row">
          <tr>
            <td>{{ row.item.gridId }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
    <v-row>
      <v-col offset="9">
        <v-pagination v-model="page" :length="1" color="#274C69" :disabled="true"></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'Grid',
})
export default class Grid extends Vue {
  @Prop() gridId!: string;

  page = 1;

  itemsPerPage = 10;

  headers: Array<string> = [];

  data: Array<string> = [];
}
</script>
