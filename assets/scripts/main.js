"use strict";
exports.__esModule = true;
//  Controle de mascara
// const dateMask: any = IMask(document.getElementById('txtData'), {
//     mask: Date,
//     min: new Date(2000, 0, 1),
//     max: new Date(2022, 08, 15),
//     lazy: false
// })
// For Debug
var log = function (text) {
    console.log(text);
};
// Função que irá limpar os valores
function limpaValores(reg) {
    var _a;
    log('Entrando em limpa valores');
    reg.data.trim().toLowerCase();
    reg.tipo.trim().toLowerCase();
    (_a = reg.descricao) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
    return reg;
}
// Função que irá fazer a captura das informações do formulário
var pegaValores = function (limpa) {
    log('Entrando em pegaValores');
    var data = document.getElementById('txtData');
    var tipo = document.getElementById('txtTipo');
    var descricao = document.getElementById('txtDescricao');
    var valor = document.getElementById('txtValor');
    var registro = {
        data: data.value,
        tipo: tipo.value,
        descricao: descricao.value,
        valor: valor.value
    };
    limpa(registro);
};
// Inicio do fluxo que ira registrar os valores
var registraValores = function () {
    log('Entrando no registra valores');
    pegaValores(limpaValores);
};
