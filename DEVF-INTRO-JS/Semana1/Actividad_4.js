//Múltiplos de 5

//1. Con while

let unumber = Number(prompt('Ingresa un número'));

let i = 0;

while( i <= unumber ){
    i++;
    if(i % 5 === 0){
        console.log(i + ' es multiplo de 5')
    }
}

//2. Con Do WHile

let unumber = Number(prompt('Ingresa un número'));

let i = 0;

do{
    i++;
    if(i % 5 === 0){
        console.log(i + ' es multiplo de 5')
    }
}while( i <= unumber )

//3. For impares

for(let i = 1; i <= 50; i++){
    if(i%2 === 0){
        console.log(i)
    }
}