import { ManejoDatos } from './ManejoDatos';

export class ManejoFormulariosBE {
    // ...
    formularios: any;
    private userID: ManejoDatos["CFN"];
    private formID: ManejoDatos["ECN"];

    constructor(formularios: any) {
        this.formularios = this.formularios;
    }
    validarDatos(datos, userID): boolean {
    return true;
    }
    enviarDatos(datos, userID, formID):void{

    }
    abrirFormulario(userID, formID): any{
        return this.formularios;
    }
    actualizarDatos(datos, userID, formID):void{
        
    }
}