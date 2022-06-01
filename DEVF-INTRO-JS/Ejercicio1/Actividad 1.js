//Solicitar un valor y multiplicarlo por 2

var valor1 = prompt("Indica el primer valor: ",0);
undefined
var multiplicacion = parseInt(valor1)*2
undefined
console.log(multiplicacion)
VM920:1 108
undefined

//Solicitar dos números y restarlos

var numero1 = prompt("Ingrese un número por favor: ",0);
var numero2 = prompt("Ingrese otro número por favor: ",0);
var restaNumeros = parseInt(numero1) - parseInt(numero2);
console.log(restaNumeros)

//Cálculo de área de circulo r=5.3

console.log("Bienvenido al cálculo del área de un círculo")
var pi = 3.141592;
var radioCirculo = 5.3;
var areaCirculo = pi * (radioCirculo**2);
console.log("El área es: ",areaCirculo);
VM2492:1 Bienvenido al cálculo del área de un círculo
VM2492:5 El área es:  88.24731928

//Área de un rombo
console.log("Bienvenido al cálculo del área de un rombo: ");
console.log("D = 8 cm");
console.log("d = 6 cm");
var baseRombo = 8;
var alturaRombo = 6;
var areaRombo = (baseRombo*alturaRombo)/2;
console.log("El resultado es: ",areaRombo," cm^2");