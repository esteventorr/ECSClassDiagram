export class Tareas{
    frecuenciaTarea: Date = new Date;
    nombre: string;
    descripcion: string;

    constructor(){
        this.frecuenciaTarea = new Date;
        this.nombre = this.nombre;
        this.descripcion = this.descripcion;

    }

    creacionTarea(){
        console.log("tarea")
    }
    programacionTarea(frecuenciaTarea: Date){
        console.log("tarea programada")
    }
}