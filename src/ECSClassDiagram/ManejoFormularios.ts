import { Tutorial } from './Tutorial';

export class ManejoFormularios {
    // ...
    formularios: any;
    private tutorial: Tutorial;


    constructor(formularios: any) {
        this.formularios = this.formularios;
        this.tutorial = new Tutorial();
    }


    iniciarTutorial(): void {
        this.tutorial.iniciarTutorial();
    }

    enviarFormulario(): void {
        console.log('Enviando formulario.');
    }

}