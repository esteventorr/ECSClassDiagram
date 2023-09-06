import { v4 as uuidv4 } from 'uuid';

// Definición de la clase Soporte
export class Soporte {
  titulo: string;
  descripcion: string;
  identificador: string;
  fechadecreacion: Date;
  fechademodificacion: Date;

  constructor(titulo: string, descripcion: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.identificador = uuidv4();
    this.fechadecreacion = new Date();
    this.fechademodificacion = new Date();
  }

  actualizarDescripcion(nuevaDescripcion: string) {
    this.descripcion = nuevaDescripcion;
    this.fechademodificacion = new Date();
  }
}

// Módulo que contiene la clase Soporte
export module SoporteModule {
  export function crearSoporte(titulo: string, descripcion: string): Soporte {
    return new Soporte(titulo, descripcion);
  }
}
