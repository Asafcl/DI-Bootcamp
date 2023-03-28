// Obtener el canvas y el contexto 2D
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
              'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            
var ancho = 20;
var alto = 20;

// Definir la separación horizontal entre los cuadrados/cajas
var separacion = 5;

// Definir la posición inicial de los cuadrados/cajas
var x = 10;
var y = 40;

// Definir un arreglo de objetos para representar los cuadrados/cajas
var cajas = [];

for (var i = 0; i < letras.length; i++) {
    // Dibujar el cuadrado/caja
    ctx.fillStyle = "#DDDDDD";
    ctx.fillRect(x, y, ancho, alto);
     // Dibujar la letra dentro del cuadrado/caja
  ctx.fillStyle = "#000000";
  ctx.font = "12px Arial";
  ctx.fillText(letras[i], x + ancho/2 - 4, y + alto/2 + 4);
  
  // Agregar el cuadrado/caja al arreglo de objetos
  cajas.push({ letra: letras[i], x: x, y: y });
  
  // Actualizar la posición horizontal para el siguiente cuadrado/caja
  x += ancho + separacion;
}

// Agregar un evento de mousedown al canvas para detectar cuando el usuario hace clic en un cuadrado/caja
canvas.addEventListener("mousedown", function(event) {
    // Obtener la posición del clic
    var x = event.offsetX;
    var y = event.offsetY;
    
     // Recorrer el arreglo de objetos para determinar si el usuario hizo clic en un cuadrado/caja
  for (var i = 0; i < cajas.length; i++) {
    var caja = cajas[i];
    if (x >= caja.x && x <= caja.x + ancho && y >= caja.y && y <= caja.y + alto) {
      // Guardar la posición inicial del cuadrado/caja
      caja.inicioX = caja.x;
      caja.inicioY = caja.y;
      
      // Guardar la posición del clic
      caja.clicX = x;
      caja.clicY = y;