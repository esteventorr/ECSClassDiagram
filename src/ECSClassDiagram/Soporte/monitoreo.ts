import { notificaciones } from "./Notificaciones UI";
export class monitoreo {

    private notificacion: notificaciones;

    constructor(monitoreo: any) {
        this.notificacion = new notificaciones();
    }
    estadoFormulario(CFN: any){
        console.log("formulario bien")
    }
    estadoSistema(){
        console.log("sistema bien")
    }
}