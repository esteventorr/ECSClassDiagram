import { Tareas } from "./TareasProgramadas UI";
import { ManejadorDatos } from "../ManejoDatos";

export class notificaciones {
    tipoNotificacion: any;
    private tarea: Tareas;

    constructor(notificaciones:any) {
        this.tipoNotificacion = this.tipoNotificacion;
        this.tarea = new Tareas();
    }
    crearNotificacion(tipoNotificacion) {
        console.log("mensaje notificacion");
        return null;
    }

    enviarNotificacion(email:any){
        console.log("mensaje enviado")
    }
}