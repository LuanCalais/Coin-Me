export class BD {

    public id: string | null

    // Construtor do bd
    constructor() {
        this.id = localStorage.getItem('id')

        // Se o id for nulo, é setado um padrão
        if (this.id === null) localStorage.setItem('id', '0')
    }

    // Método que faz a gravação no banco local do navegador
    public gravar(registro:string):void{
        console.log(registro)
    }

}