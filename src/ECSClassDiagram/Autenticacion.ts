import { APIREST } from "./ConexionesAPI";

export class AutenticacionUsuario {
  usuario: string;
  contraseña: string;
  apiRest: APIREST; // Relación de composición

  constructor(usuario: string, contraseña: string, apiRest: APIREST) {
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.apiRest = apiRest;
  }

  iniciarSesion(): void {}
  cerrarSesion(): void {}
  // ... otros métodos
}
