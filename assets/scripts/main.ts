import{registerI} from "./Interface/registroI"
import {Register} from "./Class/register"

// For Debug
let log = (text:string | object) =>{
    console.log(text)
}

// Função que irá limpar os valores
function limpaValores (reg:registerI):string {

    reg.data.trim().toLowerCase()
    reg.tipo.trim().toLowerCase()
    reg.descricao?.trim().toLowerCase()

    let regJson: string  = JSON.stringify(reg)

    return regJson

}

// Função que irá fazer a captura das informações do formulário
const pegaValores = (limpa: any):string => {

    let data = document.getElementById('txtData') as HTMLElement
    let tipo = document.getElementById('txtTipo') as HTMLElement
    let descricao = document.getElementById('txtDescricao') as HTMLElement
    let valor = document.getElementById('txtValor') as HTMLAnchorElement

    const registro: registerI = {
        data: data.value,
        tipo: tipo.value,
        descricao: descricao.value,
        valor: valor.value 
    }

    return limpa(registro)

}

// Inicio do fluxo que ira registrar os valores
const registraValores = ():void => {
    log('Entrando no registra valores')  
    let registro: string = pegaValores(limpaValores)
}
