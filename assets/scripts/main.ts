import { registerI } from "./Interface/registroI"

class BD {

    public id: string | null

    // Construtor do bd
    constructor() {
        this.id = localStorage.getItem('id')

        // Se o id for nulo, é setado um padrão
        if (this.id === null) localStorage.setItem('id', '0')
    }

    // Método que faz a gravação no banco local do navegador
    public gravar(registro:string, callBack: any):void{
        console.log(registro)
    }

}

// For Debug
let log = (text: string | object) => {
    console.log(text)
}

// Banco de dados 
const bd = new BD();

// Função que irá limpar os valores
function limpaValores(reg: registerI): string {

    reg.local.trim().toLowerCase()
    reg.data.trim().toLowerCase()
    reg.tipo.trim().toLowerCase()
    reg.descricao?.trim().toLowerCase()

    let regJson: string = JSON.stringify(reg)

    return regJson

}

const limpaCampo = () => {
    document.getElementById('txtLocal').value = ''
    document.getElementById('txtData').value = ''
    document.getElementById('txtTipo').value = ''
    document.getElementById('txtDescricao').value = ''
    document.getElementById('txtDescricao').value = ''
    document.getElementById('txtValor').value = ''
}

// Função que irá fazer a captura das informações do formulário
const pegaValores = (limpa: any): string => {

    let local = document.getElementById('txtLocal') as HTMLElement
    let data = document.getElementById('txtData') as HTMLElement
    let tipo = document.getElementById('txtTipo') as HTMLElement
    let descricao = document.getElementById('txtDescricao') as HTMLElement
    let valor = document.getElementById('txtValor') as HTMLAnchorElement

    const registro: registerI = {
        local: local.value,
        data: data.value,
        tipo: tipo.value,
        descricao: descricao.value,
        valor: valor.value
    }

    return limpa(registro)

}

// Inicio do fluxo que ira registrar os valores
const registraValores = (): void => {
    let registro: string = pegaValores(limpaValores)

    // Efetua Cadastro
    const cadastroValores = (registro: string) => new Promise((resolve, reject) => {

        bd.gravar(registro, (err: any, content: unknown) => {
            if(err){
                reject(err)
            }else{
                resolve(content)
            }
        })

    }) 

    cadastroValores(registro).then(() => {console.log('Chegando até aqui')})

    limpaCampo()
}

