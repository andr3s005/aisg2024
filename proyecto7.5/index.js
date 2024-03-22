let resultado = document.getElementById('resultado');

function asignar(valor){
    resultado.value += valor;
}

function calcular(){
    resultado.value = eval(resultado.value);
}

function limpiar(){
    resultado.value = '';
}

function raizCuadrada(){
    resultado.value = Math.sqrt(resultado.value);
}

function tangente(){
    resultado.value = Math.tan(resultado.value);
}

function coseno(){
    resultado.value = Math.cos(resultado.value);
}

function seno(){
    resultado.value = Math.sin(resultado.value);
}