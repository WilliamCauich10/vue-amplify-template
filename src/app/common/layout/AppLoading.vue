<template>
  <!--
      INDICADOR de carga
      Cuadro de dialogo que se indica que la aplicación está realizando algún proceso el usuario
      debe esperar.
      El trigger de este diálogo es la propiedad isLoading que se encuentra definida
      en el STATE (Vuex) de
      la aplicación y que puede ser accedida desde cualquier componente,
      a través de las accciones definidas
      en por el STATE (startLoader/stopLoader).
    -->
        <v-dialog v-model="isLoading" overlay-opacity="0.5" persistent width="300">
            <v-card class="circulo" color="primary" dark>
                <v-card-text class="pa-5 text-center">
                    <!-- Obtenemos el mensaje en el IDIOMA seleccionado por el usuario -->
                    <!-- <p v-html="$t('lblLoading')" /> -->
                    <h3>Cargando</h3>
                </v-card-text>
                <v-card-text>
                    <!-- Indicador de progreso -->
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                        rounded
                        height="6"
                    />
                </v-card-text>
            </v-card>
        </v-dialog>
</template>
<script lang="ts">
import {
  Vue,
  Emit,
  Component,
  Prop,
} from 'vue-property-decorator';

@Component({
  name: 'AppLoading',
})
export default class AppLoading extends Vue {
  @Prop({
    type: Boolean,
    default: true,
  })
  isLoading!: boolean;

  @Emit()
  // eslint-disable-next-line class-methods-use-this
  cerrarLoading(): boolean {
    return false;
  }
}
</script>
<style>
.circulo {
     width: 100px;
     height: 100px;
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: #5cb85c;
}
</style>
