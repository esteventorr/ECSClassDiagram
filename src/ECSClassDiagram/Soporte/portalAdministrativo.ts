import { Tareas } from "./TareasProgramadas UI";
export class portalAdministrativo {
    usuarios: string[];
    private tarea: Tareas;

    constructor(portal:any) {
        this.usuarios = this.usuarios;
        this.tarea = new Tareas();
    }

    agregarUsuario(usuario:string){
        console.log("usuario agregado");
    }

    eliminarUsuario(usuario:string){
        console.log("usuario eliminado");
    }
}