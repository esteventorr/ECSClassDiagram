import { APIREST } from "./ConexionesAPI";
import { ManejadorDatos } from "./ManejoDatos";

export class AutenticacionUsuario {
  usuario: string;
  contraseña: string;
  apiRest: APIREST; // Relación de composición

  constructor(usuario: string, contraseña: string, apiRest: APIREST) {
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.apiRest = apiRest;
  }

  iniciarSesion(): void {
    let manejoDatos: ManejadorDatos = new ManejadorDatos(null, null);
  }
  cerrarSesion(): void {}
  // ... otros métodos
}
