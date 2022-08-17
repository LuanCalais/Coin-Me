//  Controle de mascara
// const dateMask: any = IMask(document.getElementById('txtData'), {
//     mask: Date,
//     min: new Date(2000, 0, 1),
//     max: new Date(2022, 08, 15),
//     lazy: false
// })
var Register = /** @class */ (function () {
    function Register(data, tipo, descricao, valor) {
        this.data = data;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }
    Object.defineProperty(Register.prototype, "getData", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "setData", {
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "setTipo", {
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "getDescricao", {
        get: function () {
            return this.descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "setDescricao", {
        set: function (descricao) {
            this.descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "setValor", {
        set: function (valor) {
            this.valor = valor;
        },
        enumerable: false,
        configurable: true
    });
    Register.prototype.logDetails = function () {
        console.log("At the day ".concat(this.data, " you spend ").concat(this.valor, ", with ").concat(this.descricao));
    };
    return Register;
}());
// data: document.getElementById('txtData').value as HTMLInputElement,
// tipo: document.getElementById('txtTipo').value  as HTMLInputElement,
// descricao: document.getElementById('txtDescricao').value as HTMLInputElement,
// valor: document.getElementById('txtValor').value as HTMLInputElement
// For Debug
var log = function (text) {
    console.log(text);
};
var pegaValores = function () {
    var data = document.getElementById('txtData').value;
    var registros = {
        data: '10.20.2002',
        tipo: 'Alimentação',
        valor: 10.00
    };
    log(registros);
    // register = new Register(register.data, register.tipo, register.descricao, register.valor);
};
