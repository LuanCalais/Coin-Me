import{registerI} from "./Interface/registroI"
import {Register} from "./Class/register"

//  Controle de mascara
// const dateMask: any = IMask(document.getElementById('txtData'), {
//     mask: Date,
//     min: new Date(2000, 0, 1),
//     max: new Date(2022, 08, 15),
//     lazy: false
// })


// For Debug
let log = (text:string | object) =>{
    console.log(text)
}

// Função que irá limpar os valores
function limpaValores (reg:registerI):registerI {

    log('Entrando em limpa valores')

    reg.data.trim().toLowerCase()
    reg.tipo.trim().toLowerCase()
    reg.descricao?.trim().toLowerCase()
    return reg
    
}

// Função que irá fazer a captura das informações do formulário
const pegaValores = (limpa: any):void => {

    log('Entrando em pegaValores')

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

    limpa(registro)

}

// Inicio do fluxo que ira registrar os valores
const registraValores = ():void => {
    log('Entrando no registra valores')
    pegaValores(limpaValores)    
}
