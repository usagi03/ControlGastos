<template>
    <v-container fluid>
     <v-row>
        <v-col cols="12" sm="6">
           <v-card>
           <v-img src="@/assets/bienvenida.png" alt="Bienvenida" width="1000"></v-img> 
        </v-card> 
        </v-col>
        <v-col cols="12" sm="6">
          <h1>Gastos en Orden</h1>
          <h2>Bienvenidos al Sistema para gestionar sus gastos personales</h2>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
        <v-row>
         <v-col class="mt-5 mx-10">
          <v-btn color="blue" @click=accederGastos>Mostrar Gastos</v-btn>   
         </v-col>   
        </v-row>
        </v-col>
     </v-row>
       
    </v-container>
</template>
<script>
export default{
   methods:{
    accederGastos(){
       this.$router.push('/gastos')
    },
   }
}

</script>