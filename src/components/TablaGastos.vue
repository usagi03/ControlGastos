<template>
   <v-container>
      <v-table theme="ligth">
    <thead>
      <tr>
        <th class="text-left">
          Nombre
        </th>
        <th class="text-left">
          Categoria
        </th>
        <th class="text-left">
          Monto
        </th>
        <th class="text-left">
          Fecha
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="gasto in gastos"
        :key="gasto.nombre"
      >
        <td>{{ gasto.nombre }}</td>
        <td>{{ gasto.categoria }}</td>
        <td>{{ gasto.monto }}</td>
        <td>{{ gasto.fecha }}</td>
      </tr>
    </tbody>
  </v-table> 
   </v-container>
   
</template>
<script>
//import RegistroGastos from '../logica/RegistroGastos'
export default{
   watchers: {
      mostrarDatos(){
      this.gastos.agregar('Rutero','Transporte', 5, '2023-09-26');
      this.gastos.agregar('Almuerzo','Comida', 150, '2023-09-26');
      this.gastos.agregar('Taxi','Transporte', 150, '2023-09-26');
      this.gastos.agregar('Datos','Internet', 500, '2023-09-29');
      this.gastos.agregar('Café con amigos','Comida', 450, '2023-09-30'); 
}
   },
   data(){
      return {
         gastos: [
           {nombre: 'Rutero', categoria: 'Transporte', monto: 5, fecha: '2023-09-26'} 
         ]

      }
   }
}
</script>