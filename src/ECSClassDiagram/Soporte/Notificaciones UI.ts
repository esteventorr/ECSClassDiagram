import { ManejadorDatos } from "../ManejoDatos";
import { APIREST, InterfazAPI } from "../ConexionesAPI";
import { TareasProgramadas } from "./TareasProgramadas BE";

export class NotificacionesUI {
    tipoNotificacion: any;

    constructor(notificaciones:any) {
        this.tipoNotificacion = this.tipoNotificacion;
    }
    
    public static crearNotificacion(tipoNotificacion) {
        console.log("mensaje notificacion");
        return null;
    }

    public static obtenerNotificacion(){
        let envioManagement: InterfazAPI;
        //let api: APIREST = new APIREST(null, null);
        console.log("mensaje notificacion")
    }

    public static enviarNotificacion(email:any){
        console.log("mensaje enviado")
    }

    public static notificarFormulariosCompletados(collectorID: string){

    }

    public static notificarAlertasSistema(){
        
    }
}