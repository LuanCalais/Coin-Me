"use strict";
exports.__esModule = true;
exports.BD = void 0;
var BD = /** @class */ (function () {
    // Construtor do bd
    function BD() {
        this.id = localStorage.getItem('id');
        // Se o id for nulo, é setado um padrão
        if (this.id === null)
            localStorage.setItem('id', '0');
    }
    // Método que faz a gravação no banco local do navegador
    BD.prototype.gravar = function (registro) {
        console.log(registro);
    };
    return BD;
}());
exports.BD = BD;
