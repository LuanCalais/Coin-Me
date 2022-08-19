export class Register{
    data: string
    tipo: string
    descricao: string
    valor: number

    constructor(data: string, tipo: string, descricao: string, valor: number){
        this.data = data
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    get getData(){
        return this.data
    }

    set setData(data:string){
        this.data = data
    }

    get getTipo(){
        return this.tipo
    }

    set setTipo(tipo: string){
        this.tipo = tipo
    }

    get getDescricao(){
        return this.descricao
    }

    set setDescricao( descricao:string){
        this.descricao = descricao
    }

    get getValor(){
        return this.valor
    }

    set setValor(valor:number){
        this.valor = valor
    }

    logDetails(): void{
        console.log(`At the day ${this.data} you spend ${this.valor}, with ${this.descricao}`)
    }

}