var numero = parseInt(prompt("Por favor, ingrese un número:"));
    
if (!isNaN(numero)) {
  for (var i = 0; i < numero; i++) {
    alert("Hola");
    console.log("Hola");
  }
} else {

  alert("Debe ingresar un número válido.");
}