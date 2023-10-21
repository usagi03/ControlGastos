import { Gasto } from "./Gasto";

export class Registro{
  constructor(){
    this.registro = [];
  }

  // Función para mostrar los gastos en el registro
  mostrar(){
    console.log('Lista de gastos:');
    for (let i = 0; i < this.registro.length; i++) {
      let gasto = this.registro[i];
      console.log(`[${i + 1}]`,gasto);  
    }
  }

  // Función para agregar un nuevo gasto al registro
  agregar(nombre, categoria, monto, fecha) {
    const gasto = new Gasto(nombre, categoria, monto, fecha);
    this.registro.push(gasto);
    console.log(`Nuevo gasto agregado: `,gasto);      
  }

  // Funciones para editar un gasto existente en el registro
  editarNombre(indice, nombre) {
    indice--;
    if (indice >= 0 && indice < this.registro.length) {
      const gasto = this.registro[indice];
      gasto.setNombre(nombre);      
      console.log(`Gasto editado: `,gasto);
    } else {
      throw new Error('Índice inválido, no se encontró el gasto en el registro.');
    }
  }

   editarCategoria(indice, categoria) {
    indice--;
    if (indice >= 0 && indice < this.registro.length) {
      const gasto = this.registro[indice];
      gasto.setCategoria(categoria);
      console.log(`Gasto editado: `,gasto);
    } else {
      throw new Error('Índice inválido, no se encontró el gasto en el registro.');
    }
  }

   editarMonto(indice, monto) {
    indice--;
    if (indice >= 0 && indice < this.registro.length) {
      const gasto = this.registro[indice];      
      gasto.setMonto(monto);      
      console.log(`Gasto editado: `,gasto);
    } else {
      throw new Error('Índice inválido, no se encontró el gasto en el registro.');
    }
  }

   editarFecha(indice, fecha) {
    indice--;
    if (indice >= 0 && indice < this.registro.length) {
      const gasto = this.registro[indice];     
      gasto.setFecha(fecha);
      console.log(`Gasto editado: `,gasto);
    } else {
      throw new Error('Índice inválido, no se encontró el gasto en el registro.');
    }
  }

  // Función para eliminar un gasto del registro
  eliminar(indice) {
    indice--;
    if (indice >= 0 && indice < this.registro.length) {
      const gasto = this.registro.splice(indice, 1)[0];
      console.log('Gasto eliminado: ', gasto);
    } else {
      throw new Error('Índice inválido, no se encontró el gasto en el registro.');
    }
  }

  // Función para calcular el total de gastos en una categoría específica
  calcularTotalPorCategoria(categoria) {
    const gastosCategoria = this.registro.filter(gasto => gasto.categoria === categoria);
    const total = gastosCategoria.reduce((suma, gasto) => suma + gasto.monto, 0);
    console.log('Total de gastos en categoría', categoria + ': ' + total);
    return total;
  }
}

//Valores de prueba
const registro = new Registro();
registro.agregar('Rutero','Transporte', 5, '2023-09-26');
registro.agregar('Almuerzo','Comida', 150, '2023-09-26');
registro.agregar('Taxi','Transporte', 150, '2023-09-26');
registro.agregar('Datos','Internet', 500, '2023-09-29');
registro.agregar('Café con amigos','Comida', 450, '2023-09-30');
registro.mostrar();


// Editar gastos 
registro.editarFecha(2,'2023-10-01');
registro.editarNombre(5,'Salida con amigos');
registro.editarCategoria(4,'Otro');
registro.editarMonto(3, 250);
registro.mostrar();

// Eliminar un gasto
registro.eliminar(1);
registro.mostrar();

// Calcular total de gastos en una categoría específica
registro.calcularTotalPorCategoria('Comida');