<template>
  <v-app>
      <v-container class="mt-16" fluid>
        <v-app-bar color="blue">
          <div>
             <v-img class="ml-5" src="@/assets/logotipo.png" width="60" heigth="60"></v-img>
          </div>
          <v-app-bar-title><h3><strong>Gastos En Orden</strong></h3></v-app-bar-title> 
        </v-app-bar>
        <RouterView />
      </v-container>
   </v-app>
</template>
<script setup>
import { RouterView } from 'vue-router'
</script>