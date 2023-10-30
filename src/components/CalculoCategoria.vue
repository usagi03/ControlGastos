<template>
    <v-card>
        <v-row>
            <v-combobox
            v-model="valor"
            label="Categoria"
            :items="['Comida', 'Transporte', 'Recreacion', 'Internet', 'Ropa', 'Cosas de la Casa']"
            @click="calcularTotalPorCategoria(valor)"
            \></v-combobox>
            <h3>EL monto total de la categoria "{{valor}}" es de  </h3>
        </v-row>
    </v-card>
</template>
<script>
export default{
    props:{
        arreglo: Array
    },
    computed: {
        calcularTotalPorCategoria() {
         const gastosCategoria = arreglo.filter(gasto => gasto.categoria === valor);
         const total = gastosCategoria.reduce((suma, gasto) => suma + gasto.monto, 0);
         console.log('Total de gastos en categoría', categoria + ': ' + total);
         return total;
       }
    },
    data(){
        return{
            valor: '',
            total: 0,
        }
    }
}
</script>