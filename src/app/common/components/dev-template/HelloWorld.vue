<template>
  <v-container fluid class="fill-height">
    <v-row class="mt-3" justify="center" align="center">
        <v-col lg="2" md="6" sm="10" xs="12" v-for="(item, index) in lista" :key="index">
        <v-hover
        v-slot="{ hover }"
      >
        <v-card :elevation="hover ? 12 : 2" @click="go(item.ruta)">
          <v-row justify="center" align="center">
            <v-icon size="150" :color="item.color">{{item.img}}</v-icon>
          </v-row>

          <v-card-text class="text-center mt-3 pb-0">
            <h2>{{item.titulo}}</h2>
          </v-card-text>

          <v-card-subtitle>
            {{item.detalle}}
          </v-card-subtitle>
        </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
// import contact from '../Contact.vue';

export default Vue.extend({
  name: 'HelloWorld',

  components: {
    // contact,
  },
  data: () => ({
    show: true,
    lista: [
      {
        titulo: 'App-Jesus',
        ruta: 'AppJesus',
        img: 'mdi-application-cog',
        color: 'purple',
      },
      {
        titulo: 'App-Cris',
        ruta: 'AppChristopher',
        img: 'mdi-robot-happy-outline',
        color: 'primary',
      },
      {
        titulo: 'App-Erik',
        ruta: 'AppErik',
        img: 'mdi-fruit-pineapple',
        color: 'yellow',
      },
      {
        titulo: 'App-Oscar',
        ruta: 'AppOscar',
        img: 'mdi-gauge',
        color: 'green',
      },
      {
        titulo: 'App-Pedro',
        ruta: 'AppPedro',
        img: 'mdi-food-apple-outline',
        color: 'red',
      },
    ],
  }),
  methods: {
    go(url: string): any {
      this.$router.push({ name: url });
    },
  },
});
</script>
