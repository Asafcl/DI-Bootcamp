import CalculateCuadradoArea from './cuadrado.js'

const btnCapturar = document.getElementById('btnCapturar');
btnCapturar.addEventListener('click', capturarNumeros);


function capturarNumeros() {
var altura =document.getElementById('base').value
var base = document.getElementById('altura').value
CalculateCuadradoArea(altura,base)
}


