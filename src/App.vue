<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-app-bar color="blue">
          <div>
             <v-img class="ml-5" src="@/assets/logotipo.png" width="60" heigth="60"></v-img>
          </div>
          <v-app-bar-title><h3><strong>Gastos En Orden</strong></h3></v-app-bar-title> 
        </v-app-bar>
        <HomeView/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import HomeView from './views/HomeView.vue';
export default {
    name: 'App',
    components: { HomeView }
};
</script>