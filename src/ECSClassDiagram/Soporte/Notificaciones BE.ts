import { ManejadorDatos } from "../ManejoDatos";
import { TareasProgramadas } from "./TareasProgramadas BE";

export class NotificacionesBE {
  tipoNotificacion: any;

  constructor(notificaciones: any) {
    this.tipoNotificacion = this.tipoNotificacion;
  }

  static crearNotificacion(tipoNotificacion) {
    let manejoDatos: ManejadorDatos = new ManejadorDatos(null, null);
    console.log("mensaje notificacion");
    return null;
  }

  static enviarNotificacion(email: any) {
    console.log("mensaje enviado");
  }
}
