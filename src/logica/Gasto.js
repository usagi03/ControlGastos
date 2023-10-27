export class Gasto {
    constructor(nombre, categoria, monto, fecha) {
      this.setNombre(nombre);
      this.setCategoria(categoria);
      this.setMonto(monto);
      this.setFecha(fecha);
    }
    
    setNombre(nombre) {
      if (nombre && typeof nombre === 'string') {
        this.nombre = nombre.trim();
      } else {
        throw new Error('El nombre debe ser un campo de texto válido.');
      }
    }
  
    setCategoria(categoria) {
      if (categoria && typeof categoria === 'string') {
        this.categoria = categoria.trim();
      } else {
        throw new Error('La categoría debe ser un campo de texto válido.');
      }
    }
  
    setMonto(monto) {
      if (monto && monto > 0) {
        this.monto = monto;
      } else {
        throw new Error('El monto debe ser un número mayor que cero.');
      }
    }
  
    setFecha(fecha) {
      const date = new Date(fecha);
      if (fecha && date instanceof Date && !isNaN(date)) {
        this.fecha = date;
      } else {
        throw new Error('La fecha debe ser una fecha válida.');
      }
    }
  }