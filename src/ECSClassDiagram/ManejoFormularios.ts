import { Tutorial } from './Tutorial';


export class Carrousel {
    constructor() { }

    siguienteFormulario(): void {
        console.log('Siguiente Forms');
    }
    AtrasFormulario(): void {
        console.log('Atras Forms');
    }
    IrFormulario(): void {
        console.log('Ir Forms');
    }
}
export class ManejoFormularios extends Carrousel {
    // ...
    formularios: any;
    private tutorial: Tutorial;
    private AddresSection: AddresSection;
    private PersonSection: PersonSection;
    private DwellingSection: DwellingSection;
    private FeedBackSection: FeedBackSection;


    constructor(formularios: any) {
        super( );
        this.formularios = this.formularios;
        this.tutorial = new Tutorial();
    }


    iniciarTutorial(): void {
        this.tutorial.iniciarTutorial();
    }

    enviarFormulario(): void {
        console.log('Enviando formulario.');
    }

    guardarDatosLocales(): void {
        console.log('Guardando datos localmente.');
        this.formularios.setItem('datos', JSON.stringify(this.formularios));
    }

    // Carga de datos Locales
    cargarDatosLocales(): void {
        console.log('Cargando datos localmente.');
        this.formularios = JSON.parse(this.formularios.getItem('datos'));
    }

    // Envio notificaciones
    enviarNotificacion(): void {
        console.log('Enviando notificación.');
    }

}

export class AddresSection extends ManejoFormularios {
    InformacionDirecion: any;
    constructor(InformacionDirecion: any) {
        super(InformacionDirecion);
        this.InformacionDirecion = InformacionDirecion;
    }

 }
export class PersonSection extends ManejoFormularios {
    informacionPersona: any;
    constructor(informacionPersona: any) {
        super(informacionPersona)
        this.informacionPersona = informacionPersona;
    }
 }
export class DwellingSection extends ManejoFormularios {
    informacionVivienda: any;
    constructor(informacionVivienda: any) {
        super(informacionVivienda);
        this.informacionVivienda = informacionVivienda;
     }
    }

export class FeedBackSection extends ManejoFormularios {
    informacionFeedBack: any;
    constructor(informacionFeedBack: any) {
        super(informacionFeedBack);
        this.informacionFeedBack = informacionFeedBack;
    }
}