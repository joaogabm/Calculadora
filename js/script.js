function inserir(numero) {
    document.getElementById('res').innerHTML += numero;
}

function limpar() {
    document.getElementById('res').innerHTML = '';
}

function apagar() {
    var apagar = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = apagar.substring(0, apagar.length - 1);
}

function calcular() {
    var resultado = document.getElementById('res').innerHTML;
    if(resultado) {
        document.getElementById('res').innerHTML = eval(resultado);
    } else {
        alert('[ERRO] IMPOSSÍVEL CALCULAR.');
    }
}