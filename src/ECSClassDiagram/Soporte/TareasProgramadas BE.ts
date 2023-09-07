import { ManejadorDatos } from "../ManejoDatos";
import GeneradorDeReporte from "../Reporte/GeneradorDeReporte";
import { NotificacionesBE } from "./Notificaciones BE";

export interface TareasProgramadasInterface {
  frecuenciaTarea: Date;
  nombre: string;
  descripcion: string;
}

export class TareasProgramadas {
  public static programarTarea(
    fecha: Date,
    frecuencia: number,
    tarea: TareasProgramadasInterface
  ): void {
    let manejoDatos: ManejadorDatos = new ManejadorDatos(null, null);
    console.log("tarea programada");
  }

  public static obtenerTareas(): TareasProgramadasInterface[] {
    let manejoDatos: ManejadorDatos = new ManejadorDatos(null, null);
    console.log("tareas obtenidas");
    return null;
  }

  public static eliminarTarea(tarea: TareasProgramadasInterface): boolean {
    return true;
  }

  public static ejecutarTarea(tarea: TareasProgramadasInterface): void {
    console.log("tarea ejecutada");
    GeneradorDeReporte.generarReporte(null, null);
    NotificacionesBE.crearNotificacion(null);
  }
}
