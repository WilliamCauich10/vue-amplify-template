<template>
  <v-data-table
    :headers="headers"
    :items="body"
    height="250px"
    hide-default-footer
  >
  <template v-slot:item.status="{ item }">
    <v-btn icon>
      <v-icon
        :color="status[item.status].color"
      >
        {{status[item.status].icon}}
      </v-icon>
    </v-btn>
    <!-- {{status[item.status].text}} -->
  </template>
  </v-data-table>
</template>

<script lang="ts">
import {
  Component, Vue, Emit,
} from 'vue-property-decorator';

@Component({
  name: 'ReportQueue',
})
export default class ReportQueue extends Vue {
  headers = [
    {
      text: 'Nombre Layout',
      value: 'name',
      width: '80%',
      align: 'rigth',
    },
  ]

  body = [
    {
      name: 'Layout 1',
      status: 'Load',
    },
    {
      name: 'Layout 2',
      status: 'Load',
    },
    {
      name: 'Layout 3',
      status: 'Load',
    },
  ]

  status = {
    Load: {
      icon: 'mdi-clock-outline',
      text: 'Creando reporte...',
      color: 'warning',
    },
    Done: {
      icon: 'mdi-check-circle-outline',
      text: 'Reporte creado',
      color: 'success',
    },
    Error: {
      icon: 'mdi-cancel',
      text: '',
      color: 'error',
    },
  }
}
</script>
