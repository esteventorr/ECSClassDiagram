import { InterfazAPI } from "../ConexionesAPI";
import GeneradorDeReporte from "../Reporte/GeneradorDeReporte";
import { NotificacionesUI } from "./Notificaciones UI";
import { TareasProgramadas, TareasProgramadasInterface } from "./TareasProgramadas BE";

export class PortalAdministrativo {
  usuarios: string[];

  constructor(portal: any) {
    this.usuarios = this.usuarios;
  }

  agregarUsuario(usuario: string) {
    console.log("usuario agregado");
  }

  eliminarUsuario(usuario: string) {
    console.log("usuario eliminado");
  }

  programarTarea(frecuenciaTarea: Date, nombre: string, tareaDescripcion: any) {
    let tarea: TareasProgramadasInterface = {
      frecuenciaTarea: frecuenciaTarea,
      nombre: nombre,
      descripcion: tareaDescripcion,
    };
    TareasProgramadas.programarTarea(frecuenciaTarea, 1, tarea);
    console.log("tarea programada");
  }

  guardarAjustes() {
    let envioManagement: InterfazAPI;
  }

  obtenerAlertas() {
    NotificacionesUI.notificarAlertasSistema();
  }

  GenerarReportes() {
    GeneradorDeReporte.generarReporte(null, null);
  }
}
