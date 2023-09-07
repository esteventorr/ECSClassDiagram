import { NotificacionesBE } from "./Notificaciones BE";
export class monitoreo {

    constructor(monitoreo: any) {
    }
    estadoFormulario(CFN: any){
        console.log("formulario bien")
    }
    estadoSistema(){
        console.log("sistema bien")
        NotificacionesBE.crearNotificacion(null);
    }
}