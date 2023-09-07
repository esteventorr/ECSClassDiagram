import { PortalSoporte } from "./Soporte";

export interface IPreguntaFrecuenteCasoDeUso {
    crearPreguntaFrecuente(titulo: string, descripcion: string): PortalSoporte;
    editarPreguntaFrecuente(identificador: string, nuevaDescripcion: string): boolean;
    eliminarPreguntaFrecuente(identificador: string): boolean;
    obtenerPreguntaFrecuente(identificador: string): PortalSoporte | null;
  }
  