import IGenerarReporte from './IGenerarReporte'; 
import Reportes from './Reportes'; 

class GeneradorDeReporte implements IGenerarReporte {
  async generarYEnviarReporte(informe: Reportes) {

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
}

export default GeneradorDeReporte;
