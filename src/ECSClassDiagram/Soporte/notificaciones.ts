import { Tareas } from "./tareas";
export class notificaciones {
    tipoNotificacion: any;
    private tarea: Tareas;

    constructor(notificaciones:any) {
        this.tipoNotificacion = this.tipoNotificacion;
        this.tarea = new Tareas();
    }
    crearNotificacion(tipoNotificacion){
        console.log("mensaje notificacion");
    }

    enviarNotificacion(email:any){
        console.log("mensaje enviado")
    }
}