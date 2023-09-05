var numero = parseInt(prompt("Por favor, ingrese un número:"));

if (!isNaN(numero)) {
  var contador = 0;

  while (contador < numero) {
    alert("Hola");
    console.log("Hola");
    contador++;
  }
} else {
  alert("Debe ingresar un número válido.");
}