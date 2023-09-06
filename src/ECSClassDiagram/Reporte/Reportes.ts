export default class Reportes {
  private fechaCreacion: Date;
  private metadata: { [clave: string]: string };
  private nombreReporte: string;

  constructor(nombreReporte: string) {
    this.fechaCreacion = new Date();
    this.metadata = {};
    this.nombreReporte = nombreReporte;
  }

  agregarMetadata(clave: string, valor: string) {
    this.metadata[clave] = valor;
  }

  generarInforme() {
    console.log(`Informe "${this.nombreReporte}" generado y enviado correctamente.`);
  }
}
