"use strict";
exports.__esModule = true;
// For Debug
var log = function (text) {
    console.log(text);
};
// Função que irá limpar os valores
function limpaValores(reg) {
    var _a;
    reg.data.trim().toLowerCase();
    reg.tipo.trim().toLowerCase();
    (_a = reg.descricao) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
    var regJson = JSON.stringify(reg);
    return regJson;
}
// Função que irá fazer a captura das informações do formulário
var pegaValores = function (limpa) {
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
    return limpa(registro);
};
// Inicio do fluxo que ira registrar os valores
var registraValores = function () {
    log('Entrando no registra valores');
    var registro = pegaValores(limpaValores);
};
