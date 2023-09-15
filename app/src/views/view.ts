export abstract class View<T> { //Tipo genérico T. //Uma classe abstrata não pode criar uma instância dela

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) { // o ? é um método para usar um método de scape; Parametro opcional
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error (`Seletor ${seletor} não existe no DOM!`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        const t1 = performance.now();
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execução do método update: ${(t2 - t1)/1000}`)
    }

    protected abstract template(model: T): string;
}