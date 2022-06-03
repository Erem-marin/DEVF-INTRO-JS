//1. Acceso al bar con condicionales

console.log ("Bienvenido al bar");
let nombre = prompt('¿Cuál es tu nombre?',0);
let edad = prompt('¿Cuántos años tienes?',0);

if(edad >= 18 && nombre == 'Carlos'){
    console.log('Bienvenido al área VIP');
}else if(edad >= 18 && nombre == 'Mario'){
    console.log('Bienvenido al área VIP');
}else if(edad >= 18){
    console.log('Puedes ingresar al bar');
}else{
    console.log('No puedes ingresar al bar')
}


//2. Piedra, papel o tijera


//Piedra = 1
//Papel = 2
//Tijera = 3

let jugador1 = prompt('Indique un número entre 1 y 3',0);
let jugador2 = prompt('Indique un número entre 1 y 3',0);

if(jugador1 == jugador2){
    console.log('Empate');
}else if(jugador1 == 1 && jugador2 == 2){
    console.log('Gana jugador 2');
}else if(jugador1 == 1 && jugador2 == 3){
    console.log('Gana jugador 1');
}else if(jugador1 == 2 && jugador2 == 1){
    console.log('Gana jugador 1');
}else if(jugador1 == 2 && jugador2 == 3){
    console.log('Gana jugador 2');
}else if(jugador1 == 3 && jugador2 == 1){
    console.log('Gana jugador 2');
}else if(jugador1 ==3 && jugador2 == 2){
    console.log('Gana jugador 1');
}else{
    console.log('Opción no valida, vuelvan a intentarlo')
}

//3. Número divisible entre 2

let numero = prompt('Ingrese un número entero',0);
let division = (numero/2);

if(Number.isInteger(division)){
    console.log('El número ' + numero + ' es divisible entre 2');
}else{
    console.log('El número ' + numero + ' no es divisible entre 2');
}

//4. Números pares

const npar = prompt('Ingrese un número',0);
let comprobacion = npar%2;

if(comprobacion == 0){
    alert('El número ' + npar + ' es par');
}else{
    alert('El número  '+ npar + ' no es par');
}

//5. Número ganador

alert('Bienvenido al juego de la suerte');
const boleto = prompt('Por favor ingrese un número',0);

if(boleto == 1000){
    alert('¡Felicidades! Ganaste un premio')
}else{
    alert('Lo sentimos, sigue participando')
}

//6. ¿Cuál es menor?

alert('Por favor ingrese 2 números');
const numero1 = Number (prompt('Ingrese un número',0));
const numero2 = Number (prompt('Ingrese otro número',0));

if(numero1 > numero2){
    console.log(numero2 + ' es menor que ' + numero1);
}else{
    console.log(numero1 + ' es menor que ' + numero2);
}


//7. Mayor de tres números

let pnumero = Number (prompt('Ingrese el primer número',0));
let snumero = Number (prompt('Ingrese el segundo número',0));
let tnumero = Number (prompt('Ingrese el tercer número',0));

if(pnumero > snumero && pnumero > tnumero){
    console.log('El primer número es mayor');
}else if(pnumero > snumero && pnumero < tnumero){
    console.log('El tercer número es mayor');
}else if(pnumero < snumero && pnumero > tnumero){
    console.log('El segundo número es mayor');
}else if(pnumero === snumero && pnumero < tnumero){
    console.log('El tercer número es mayor')
}else if(pnumero < snumero && pnumero === tnumero){
    console.log('El segundo número es mayor')
}else if(pnumero === snumero && pnumero > tnumero){
    console.log('El tercer número es menor que el primer y segundo número')
}else if(pnumero > snumero && pnumero === tnumero){
    console.log('El segundo número es menor que el primer y tercer número')
}else if(pnumero > snumero && snumero === tnumero){
    console.log('El primer número es mayor')
}else if(pnumero < snumero && snumero === tnumero){
    console.log('El primer número es mmenor que el segundo y tercer número')
}else if(pnumero === snumero && pnumero === tnumero){
    console.log('Todos los números son iguales')
}else if(pnumero < snumero && snumero > tnumero){
    console.log('El segundo número es mayor')
}else if(pnumero < snumero && snumero < tnumero){
    console.log('El tercer número es mayor')
}else{
    console.log('Por favor vuelva a intentarlo')
}