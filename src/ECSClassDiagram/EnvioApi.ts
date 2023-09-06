import { ManejoFormularios } from "./ManejoFormularios";
import { ManejoFormulariosOffline } from "./ManejoFormulariosOffline";

export class EnvioApi {
    formulariosData = 'Ejemplo de formularios';
    manejoFormularios = new ManejoFormularios(this.formulariosData);
    manejoFormulariosOffline = new ManejoFormulariosOffline(this.formulariosData);
}
