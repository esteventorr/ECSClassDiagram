import { ManejoFormularios } from "./ManejoFormularios";

export class ManejoFormulariosOffline extends ManejoFormularios {
    private almacenamientoLocal: any;

    constructor(formularios: any) {
        super(formularios);
        this.almacenamientoLocal = window.localStorage;
    }

    // Guardado de datos Locales
    guardarDatosLocales(): void {
        console.log('Guardando datos localmente.');
        this.almacenamientoLocal.setItem('datos', JSON.stringify(this.formularios));
    }

    // Carga de datos Locales
    cargarDatosLocales(): void {
        console.log('Cargando datos localmente.');
        this.formularios = JSON.parse(this.almacenamientoLocal.getItem('datos'));
    }

    // Envio notificaciones
    enviarNotificacion(): void {
        console.log('Enviando notificación.');
    }

}