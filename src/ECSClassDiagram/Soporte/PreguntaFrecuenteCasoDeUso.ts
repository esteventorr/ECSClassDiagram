import { v4 as uuidv4 } from 'uuid';
import { Soporte } from '../Soporte';
import { IPreguntaFrecuenteCasoDeUso } from './IPreguntaFrecuenteCasoDeUso';

// Simulación de la base de datos de preguntas frecuentes
const baseDeDatosPreguntasFrecuentes: { [identificador: string]: Soporte } = {};

// Implementación de la interfaz PreguntaFrecuenteCasoDeUso
export class PreguntaFrecuenteCasoDeUsoImpl implements IPreguntaFrecuenteCasoDeUso {
  crearPreguntaFrecuente(titulo: string, descripcion: string): Soporte {
    const nuevaPreguntaFrecuente = new Soporte(titulo, descripcion);
    baseDeDatosPreguntasFrecuentes[nuevaPreguntaFrecuente.identificador] = nuevaPreguntaFrecuente;
    return nuevaPreguntaFrecuente;
  }

  editarPreguntaFrecuente(identificador: string, nuevaDescripcion: string): boolean {
    const preguntaFrecuente = baseDeDatosPreguntasFrecuentes[identificador];
    if (preguntaFrecuente) {
      preguntaFrecuente.actualizarDescripcion(nuevaDescripcion);
      return true;
    }
    return false; // Pregunta frecuente no encontrada
  }

  eliminarPreguntaFrecuente(identificador: string): boolean {
    if (baseDeDatosPreguntasFrecuentes[identificador]) {
      delete baseDeDatosPreguntasFrecuentes[identificador];
      return true;
    }
    return false; // Pregunta frecuente no encontrada
  }

  obtenerPreguntaFrecuente(identificador: string): Soporte | null {
    const preguntaFrecuente = baseDeDatosPreguntasFrecuentes[identificador];
    return preguntaFrecuente || null;
  }
}

// Uso de la implementación
const casoDeUso = new PreguntaFrecuenteCasoDeUsoImpl();

// Ejemplos de uso
const pregunta1 = casoDeUso.crearPreguntaFrecuente('¿Cómo hacer algo?', 'Instrucciones para hacer algo.');
console.log(pregunta1);

casoDeUso.editarPreguntaFrecuente(pregunta1.identificador, 'Instrucciones actualizadas para hacer algo.');
console.log(baseDeDatosPreguntasFrecuentes[pregunta1.identificador]);

casoDeUso.eliminarPreguntaFrecuente(pregunta1.identificador);
console.log(baseDeDatosPreguntasFrecuentes[pregunta1.identificador]);

const pregunta2 = casoDeUso.obtenerPreguntaFrecuente(pregunta1.identificador);
console.log(pregunta2);
