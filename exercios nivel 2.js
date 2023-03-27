//exercicios nivel 2 de laços do curso de TSI, usando while

//questão 1 = multiplicar dois numeros sem usar o operador da multiplicação
var a = 10
var b = 5
var resultado = 0;
var cont = 0;

while (cont < b){
    resultado += a;
    cont++;
}
console.log(resultado);

//questão 2 = dividir dois numeros sem usar o operador da divisão
var a = 10;
var b = 2;
var resultado = 0;


while (a >= b){
     a -= b;
    resultado++;
}

console.log("resultado:", resultado);
console.log("Resto:", a);

//questão 3 = computar o resto de divisão de dois numeros 

var a = 10;
var b = 2;

while(a >= b){
    a -= b;
 }
 console.log("resto:",a);
 