import { APIREST, InterfazAPI } from "../ConexionesAPI";
import { NotificacionesUI } from "./Notificaciones UI";
import { TareasProgramadas, TareasProgramadasInterface } from "./TareasProgramadas BE";
// Definición de la clase Soporte
export class PortalSoporte {
  titulo: string;
  descripcion: string;
  identificador: string;
  fechadecreacion: Date;
  fechademodificacion: Date;

  constructor(titulo: string, descripcion: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.identificador = ""; //uuidv4();
    this.fechadecreacion = new Date();
    this.fechademodificacion = new Date();
  }

  actualizarDescripcionFormulario(nuevaDescripcion: string) {
    this.descripcion = nuevaDescripcion;
    this.fechademodificacion = new Date();
  }

  obtenerInformacionUsuario() {
    let envioManagement: InterfazAPI;
    //let api: APIREST = new APIREST(null, null);
  }

  actualizarInformacionUsuario() {
    let envioManagement: InterfazAPI;
    //let api: APIREST = new APIREST(null, null);
  }

  obtenerAlertasSistema() {
    NotificacionesUI.notificarAlertasSistema();
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
}

// Módulo que contiene la clase Soporte
export module SoporteModule {
  export function crearSoporte(titulo: string, descripcion: string): PortalSoporte {
    return new PortalSoporte(titulo, descripcion);
  }
}
