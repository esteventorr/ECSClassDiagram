import { ManejadorDatos } from '../ManejoDatos';
import IGenerarReporte from './IGenerarReporte'; 
import Reportes from './Reportes'; 

class GeneradorDeReporte implements IGenerarReporte {
  async generarYEnviarReporte(informe: Reportes) {
    let manejoDatos: ManejadorDatos = new ManejadorDatos(null, null);
    informe.generarInforme();

  
    await this.almacenarEnBaseDeDatos(informe);


    await this.enviarAApiRest(informe);

    console.log('Informe generado y enviado exitosamente.');
  }

  private async almacenarEnBaseDeDatos(informe: Reportes) {
   
    console.log(`Informe almacenado en la base de datos: ${JSON.stringify(informe)}`);
  }

  private async enviarAApiRest(informe: Reportes) {

    console.log(`Informe enviado a la API REST: ${JSON.stringify(informe)}`);
  }

  static generarReporte(nombreReporte: string, tipoReporte: string) {
    const reporte = new Reportes(nombreReporte);
    reporte.agregarMetadata('tipo', tipoReporte);
    return reporte;
  }
}

export default GeneradorDeReporte;
