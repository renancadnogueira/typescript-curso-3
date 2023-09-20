export abstract class View<T> { //Tipo genérico T. //Uma classe abstrata não pode criar uma instância dela

    protected elemento: HTMLElement;


    constructor(seletor: string) { // o ? é um método para usar um método de scape; Parametro opcional
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error (`Seletor ${seletor} não existe no DOM!`)
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}