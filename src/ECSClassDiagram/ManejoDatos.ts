export class CacheDatos {
  cache: any;

  constructor(cache: any) {
    this.cache = cache;
  }

  almacenarDatos(): void {}
  recuperarDatos(): any {}
  //... otros métodos
}

export class ManejadorDatos {
  datos: any;
  cacheDatos: CacheDatos; // Relación de composición

  constructor(datos: any, cacheDatos: CacheDatos) {
    this.datos = datos;
    this.cacheDatos = cacheDatos;
  }

  persistirDatos(): void {}
  enviarDatosAECP(): void {}
  getUserID(): number {
    return datos;
  }
  geFormID(): number {
    return datos;
  }
  //... otros métodos
}
