<template>
    <v-container class="mt-16" fluid>
        <v-card>
            <v-row class="mt-5">
                <v-spacer></v-spacer>
                <v-col sm="3">
                   <v-btn>add</v-btn> 
                </v-col>
                <v-col> 
                    <v-btn>del</v-btn>
                </v-col>
                
                
            </v-row>
            <v-divider class="mt-10"></v-divider>
          <TablaGastos/>  
        </v-card>
        
    </v-container>
</template>
<script setup>
import TablaGastos from '../components/TablaGastos.vue';


</script>
