import { ManejadorDatos } from "./ManejoDatos";

export interface InterfazAPI {
  obtenerDatos(): any;
  enviarDatos(datos: any): void;
}

export class APIREST implements InterfazAPI {
  url: string;
  manejadorDatos: ManejadorDatos; // Relación de composición

  constructor(url: string, manejadorDatos: ManejadorDatos) {
    this.url = url;
    this.manejadorDatos = manejadorDatos;
  }

  obtenerDatos(): any {}
  enviarDatos(datos: any): void {}
  // ... otros métodos
}