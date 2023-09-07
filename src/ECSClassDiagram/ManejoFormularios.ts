import { InterfazAPI } from "./ConexionesAPI";
import { Tutorial } from "./Tutorial";
import { NotificacionesUI } from "./Soporte/Notificaciones UI";

export class Carrousel {
  constructor() {}

  siguienteFormulario(): void {
    console.log("Siguiente Forms");
  }
  AtrasFormulario(): void {
    console.log("Atras Forms");
  }
  IrFormulario(): void {
    console.log("Ir Forms");
  }
}
export class ManejoFormularios extends Carrousel {
  // ...
  formulariosOffline: any;
  private tutorial: Tutorial;
  private AddresSection: AddresSection;
  private PersonSection: PersonSection;
  private DwellingSection: DwellingSection;
  private FeedBackSection: FeedBackSection;

  constructor(formularios: any) {
    super();
    this.formulariosOffline = this.formulariosOffline;
    this.tutorial = new Tutorial();
  }

  mostrarFormulario(address: string): string {
    console.log("Mostrando formulario.");
    return null;
  }

  iniciarTutorial(): void {
    this.tutorial.iniciarTutorial(1);
  }

  enviarFormulario(): void {
    let envioManagement: InterfazAPI;
    envioManagement.enviarDatos(this.formulariosOffline);
    console.log("Enviando formulario.");
  }

  enviarFormularioOffline(formularios: any): void {
    let envioManagement: InterfazAPI;
    envioManagement.enviarDatos(formularios);
    console.log("Enviando formulario.");
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
    super(informacionPersona);
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

export class ManejoFormulariosOffline extends ManejoFormularios {
  public formulariosOffline: any;

  constructor(formularios: any) {
    super(formularios);
    // EVENT LISTENER
  }

  sincronizarConInternet() {
    this.enviarFormularioOffline(this.formulariosOffline);
    NotificacionesUI.notificarFormulariosCompletados("1");
  }

  guardarDatosLocalesCache(): void {
    console.log("Guardando datos localmente.");
    this.formulariosOffline.setItem("datos", JSON.stringify(this.formulariosOffline));
  }
  guardarDatosLocalesMobileCache(): void {
    console.log("Guardando datos localmente.");
    this.formulariosOffline.setItem("datos", JSON.stringify(this.formulariosOffline));
  }

  // Carga de datos Locales
  cargarDatosLocalesCache(): void {
    console.log("Cargando datos localmente.");
    this.formulariosOffline = JSON.parse(this.formulariosOffline.getItem("datos"));
  }

  // Envio notificaciones
  enviarNotificacion(): void {
    console.log("Enviando notificación.");
  }
}
