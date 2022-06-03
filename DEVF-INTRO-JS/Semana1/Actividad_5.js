/* 1. Construye un código bajo las siguientes reglas:
*Itera arreglo=[1,4,6,10,22,55,46,2,5,0] utilizando un ciclo for
*Imprime en consola los valores que sean mayores a 3 */

let arreglo = [1,4,6,10,22,55,46,2,5,0];

for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 3){
        console.log(`Número ${i}: ${arreglo[i]} `);
    }
}

/* 2. Construye un código bajo las siguientes reglas:
*Declara un arreglo vacío
*Con un ciclo While que se ejecute 5 veces, agrega los elementos al Array */

let animales = [];
let i = 0;

while(i<5){
    animales.push(prompt('Agregue un animal'));
    i++;
    // console.log(`Intento ${i}: ${animales}`)
}console.log(animales)

/* 3. Por medio del ciclo for iterar el array creado en el 
ejercicio 2 e imprimir cada uno de los elementos de manera ordenada */

let animalesnew = animales.sort();

for(let i = 0; i < animales.length; i++){
    console.log(`Animal ${i}: ${animalesnew[i]}`);
}