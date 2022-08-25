"use strict";
exports.__esModule = true;
var BD = /** @class */ (function () {
    // Construtor do bd
    function BD() {
        this.id = localStorage.getItem('id');
        // Se o id for nulo, é setado um padrão
        if (this.id === null)
            localStorage.setItem('id', '0');
    }
    // Método que faz a gravação no banco local do navegador
    BD.prototype.gravar = function (registro, callBack) {
        console.log(registro);
    };
    return BD;
}());
// For Debug
var log = function (text) {
    console.log(text);
};
// Banco de dados 
var bd = new BD();
// Função que irá limpar os valores
function limpaValores(reg) {
    var _a;
    reg.local.trim().toLowerCase();
    reg.data.trim().toLowerCase();
    reg.tipo.trim().toLowerCase();
    (_a = reg.descricao) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
    var regJson = JSON.stringify(reg);
    return regJson;
}
var limpaCampo = function () {
    document.getElementById('txtLocal').value = '';
    document.getElementById('txtData').value = '';
    document.getElementById('txtTipo').value = '';
    document.getElementById('txtDescricao').value = '';
    document.getElementById('txtDescricao').value = '';
    document.getElementById('txtValor').value = '';
};
// Função que irá fazer a captura das informações do formulário
var pegaValores = function (limpa) {
    var local = document.getElementById('txtLocal');
    var data = document.getElementById('txtData');
    var tipo = document.getElementById('txtTipo');
    var descricao = document.getElementById('txtDescricao');
    var valor = document.getElementById('txtValor');
    var registro = {
        local: local.value,
        data: data.value,
        tipo: tipo.value,
        descricao: descricao.value,
        valor: valor.value
    };
    return limpa(registro);
};
// Inicio do fluxo que ira registrar os valores
var registraValores = function () {
    var registro = pegaValores(limpaValores);
    // Efetua Cadastro
    var cadastroValores = function (registro) { return new Promise(function (resolve, reject) {
        bd.gravar(registro, function (err, content) {
            if (err) {
                reject(err);
            }
            else {
                resolve(content);
            }
        });
    }); };
    cadastroValores(registro).then(function () { console.log('Chegando até aqui'); });
    limpaCampo();
};
