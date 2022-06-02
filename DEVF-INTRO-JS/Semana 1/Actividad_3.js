//Acceso al bar con condicionales

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


//Piedra, papel o tijera


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