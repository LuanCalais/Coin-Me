//  Controle de mascara
// const dateMask: any = IMask(document.getElementById('txtData'), {
//     mask: Date,
//     min: new Date(2000, 0, 1),
//     max: new Date(2022, 08, 15),
//     lazy: false
// })

class Register{
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

interface Orcamento{
    data: string,
    tipo: string,
    descricao?: string,
    valor: number
}


// data: document.getElementById('txtData').value as HTMLInputElement,
// tipo: document.getElementById('txtTipo').value  as HTMLInputElement,
// descricao: document.getElementById('txtDescricao').value as HTMLInputElement,
// valor: document.getElementById('txtValor').value as HTMLInputElement

// For Debug
let log = (text:string | object) =>{
    console.log(text)
}

const pegaValores = ():void => {


    let registros: Orcamento = {
        data: '10.20.2002',
        tipo: 'Alimentação',
        valor: 10.00
    }

    log(registros)


    // register = new Register(register.data, register.tipo, register.descricao, register.valor);
}
