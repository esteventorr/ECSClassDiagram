import { ManejadorDatos } from './ManejoDatos';

export class ManejoFormulariosBE {
    // ...
    formularios: any;
    private userID: number;
    private formID: number;

    constructor(formularios: any) {
        this.formularios = this.formularios;
        this.userID = ManejadorDatos.getUserID();
        this.formID = ManejadorDatos.getFormID();
    }
    validarDatos(datos): boolean {
    return true;
    }
    enviarDatos(datos):void{

    }
    abrirFormulario(): any{
        return this.formularios;
    }
    actualizarDatos(datos):void{
        
    }
}
