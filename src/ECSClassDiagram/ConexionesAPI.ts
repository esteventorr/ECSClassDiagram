import { ManejadorDatos } from "./ManejoDatos";

export interface InterfazAPI {
  obtenerDatos(): any;
  enviarDatos(datos: any): void;
}

export class APIREST implements InterfazAPI {
  url: string;

  constructor(url: string, manejadorDatos: ManejadorDatos) {
    this.url = url;
  }

  obtenerDatos(): any {
    let manejoDatos: ManejadorDatos = new ManejadorDatos(null, null);
  }
  enviarDatos(datos: any): void {}
  // ... otros métodos
}