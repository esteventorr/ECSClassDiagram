import { Soporte } from "./Soporte";

export interface IPreguntaFrecuenteCasoDeUso {
    crearPreguntaFrecuente(titulo: string, descripcion: string): Soporte;
    editarPreguntaFrecuente(identificador: string, nuevaDescripcion: string): boolean;
    eliminarPreguntaFrecuente(identificador: string): boolean;
    obtenerPreguntaFrecuente(identificador: string): Soporte | null;
  }
  