import { SoporteModule } from './nombre-del-archivo';

// Crear una instancia de Soporte
const soporte = SoporteModule.crearSoporte('Título de ejemplo', 'Descripción de ejemplo');

// Acceder a las propiedades de la instancia
console.log(`Título: ${soporte.titulo}`);
console.log(`Descripción: ${soporte.descripcion}`);
console.log(`Identificador: ${soporte.identificador}`);
console.log(`Fecha de Creación: ${soporte.fechadecreacion}`);
console.log(`Fecha de Modificación: ${soporte.fechademodificacion}`);

// Actualizar la descripción
soporte.actualizarDescripcion('Nueva descripción');
console.log(`Nueva Descripción: ${soporte.descripcion}`);
console.log(`Nueva Fecha de Modificación: ${soporte.fechademodificacion}`);
