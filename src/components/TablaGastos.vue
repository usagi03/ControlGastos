<template>
   <v-container class="d-flex justify-center">
    <v-data-table
    :headers="headers"
    :items="gastos"
    :sort-by="[{ key: 'categoria', order: 'asc' }]"
    class="elevation-1"
   >
    <template v-slot:top>
      <v-tool-bar  class="d-flex justify-end">
        <v-spacer></v-spacer>
        
         <v-dialog
         v-model="dialog"
         persistent
         max-width="500px"
        >
           <template v-slot:activator="{ props }">
          <v-btn
           variant="text"
           icon
           density="compact"
           class="mt-3 mr-3"
           v-bind="props"
            >
              <v-icon><IconPlus/></v-icon>
            </v-btn>
            
           </template>  
           <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-text-field 
                v-model="gastoItem.nombre"
                label="Nombre"></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-combobox
                v-model="gastoItem.categoria"
                label="Categoria"
                :items="['Comida', 'Transporte', 'Recreacion', 'Internet', 'Ropa', 'Cosas de la Casa']"
                ></v-combobox>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-text-field 
                v-model="gastoItem.monto"
                label="Monto"></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-text-field 
                v-model="gastoItem.fecha"
                label="Fecha"></v-text-field>
              </v-col>
              </v-row>
            </v-card-text>
           </v-card>
           <v-card-actions
            class="mt-n12 mr-4"
           >
            <v-spacer></v-spacer>
            <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                {{ tituloBoton }}
              </v-btn>
           </v-card-actions>
         </v-dialog>
         <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">¿Seguro que quieres eliminar el elemento?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
       </v-tool-bar>
      </template> 
       <template  v-slot:[`item.actions`]="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item)"
      >
        <IconEdit/>
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item)"
      >
        <IconDelete/>
      </v-icon>
    </template>
  </v-data-table>    
  <v-card class="mx-16" width="600" heigth="400">
    <v-col>
      <v-combobox
      v-model="valor"
      label="Categoria"
      :items="['Comida', 'Transporte', 'Recreacion', 'Internet', 'Ropa', 'Cosas de la Casa']"
      @click="show=true"
      ></v-combobox>
    </v-col>
    <v-col v-if="show">
      <h3>El monto total de la categoria "{{valor}}" es de {{ calcularTotalPorCategoria() }} </h3>
    </v-col>
      
  </v-card>
</v-container>
   
</template>
<script>
import IconPlus from "./icons/IconPlus.vue";
import IconDelete from "./icons/IconDelete.vue";
import IconEdit from './icons/IconEdit.vue';

export default{
  components: {
    IconPlus,
    IconDelete,
    IconEdit,
},
   computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Gasto' : 'Editar Gasto'
      },
      tituloBoton(){
        return this.editedIndex === -1 ? 'Agregar' : 'Guardar'
      }
   },
   watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
   
   data(){
      return {
        show: false,
         valor: '',
         dialog: false,
         dialogDelete: false,
         gastos: [],
         headers: [
          {
            title: 'Nombre',
            align: 'start',
            sortable: false,
            key: 'nombre',
          },
          { title: 'Categoria', key: 'categoria' },
          { title: 'Monto', key: 'monto' },
          { title: 'Fecha', key: 'fecha' },
          { title: 'Acciones', key: 'actions', sortable: false },
        ],
        editedIndex: -1,
       gastoItem: {
        nombre: '',
        categoria: '',
        monto: 0,
        fecha: '',
      },
       defaultItem: {
        nombre: '',
        categoria: '',
        monto: 0,
        fecha: '',
      },
      }
   },
   created(){
    this.inicializar()
   },
    methods:{
     inicializar(){
      this.gastos = [
        {nombre: 'Rutero', categoria: 'Transporte', monto: 5, fecha: '2023-09-26'},
        {nombre: 'Almuerzo', categoria: 'Comida', monto: 150, fecha: '2023-09-26'},
        {nombre: 'Taxi', categoria: 'Transporte', monto: 150, fecha: '2023-09-26'},
        {nombre: 'Datos', categoria: 'Internet', monto: 500, fecha: '2023-09-29'},
        {nombre: 'Cafe con amigos', categoria: 'Comida', monto: 450, fecha: '2023-09-30'},
        {nombre: 'Campismo', categoria: 'Recreacion', monto: 2000, fecha: '2023-10-28'},
        {nombre: 'Fiesta en el Salon', categoria: 'Recreacion', monto: 500, fecha: '2023-10-26'},
        {nombre: 'Camion para Campismo', categoria: 'Transporte', monto: 350, fecha: '2023-10-27'},
        {nombre: 'Almuerzo', categoria: 'Comida', monto: 350, fecha: '2023-10-20'},
        {nombre: 'Vestido Negro', categoria: 'Ropa', monto: 1000, fecha: '2023-09-26'},
        {nombre: 'Batidora', categoria: 'Cosas de la Casa', monto: 2000, fecha: '2023-11-26'},
        {nombre: 'Microondas', categoria: 'Cosas de la Casa', monto: 2500, fecha: '2023-11-26'},
        {nombre: 'Frasada', categoria: 'Cosas de la Casa', monto: 500, fecha: '2023-11-26'},
      ]
    },
    calcularTotalPorCategoria() {
         const gastosCategoria = this.gastos.filter(gasto => gasto.categoria === this.valor);
         const total = gastosCategoria.reduce((suma, gasto) => suma + gasto.monto, 0);
         return total;
       },
    close () {
        this.dialog = false
        this.$nextTick(() => {
          this.gastoItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.gastos[this.editedIndex], this.gastoItem)
        } else {
          this.gastos.push(this.gastoItem)
        }
        this.close()
      },
      editItem (item) {
        this.editedIndex = this.gastos.indexOf(item)
        this.gastoItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.gastos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.gastos.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.gastoItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
   }

}
</script>