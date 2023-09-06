import Reportes from './Reportes';
interface IGenerarReporte {
    generarYEnviarReporte(informe: Reportes): Promise<void>;
  }
  
  export default IGenerarReporte;
  