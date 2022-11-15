const promptSync = require('prompt-sync');
const prompt = promptSync();

// let number = prompt("Digite um número: ");
// let a = 0;
// let b = 0;
// if (number > 0) {
//     a = number;
//     console.log(a);
// } else if (number < 0) {
//     b = number;
//     console.log(b);
// } else {
//     console.log("0")
// }

// let numero = prompt("Digite um valor: ");
// if (numero % 2 == 0) {
//     console.log("Par")
// } else {
//     console.log("Ímpar")
// }

// let notas = [];
// for (let x = 0; x <= 3; x++) {
//     notas[x] = prompt("Digite a nota: ")
// }

// let resultado = 0;

// notas.forEach(nota => {
//     resultado = Number(nota)+Number(resultado);
// });
// let x = 0;
// while(x < notas.length) {
//     resultado += Number(notas[x]);
//     x++;
// }

// for (let x = 0; x < notas.length; x++) {
//     resultado = Number(notas[x])+Number(resultado);
// }
// console.log(resultado/notas.length)

// let numero = prompt("Digite um valor: ")
// if (numero > 100) {
//     console.log(numero);
// } else {
//     console.log("zero");
// }

// let valores = [];

// for (let x = 0; x < 3; x++) {
//     valores[x] = prompt("Digite um número: ");
// }
// let maiorNumero = 0;
// let menorNumero = valores[0];
// let resultado = 0;
// valores.forEach(valor => {
//     if (maiorNumero < valor) {
//         maiorNumero = valor;
//     }
//     if (menorNumero > valor) {
//         menorNumero = valor
//     }
//     resultado += Number(valor);
// });
// console.log("Média: "+resultado/valores.length)
// console.log("Maior número: "+maiorNumero)
// console.log("Menor número: "+menorNumero)

// let decision = "S";

// while(decision.toUpperCase() != "N") {
//     let firstNumber = prompt("Digite o primeiro número: ");
//     let type = prompt("Digite o tipo de operação(+,-,*,/): ")
//     let secondNumber = prompt("Digite o segundo número: ");

//     if (type == "+") {
//         console.log(Number(firstNumber)+Number(secondNumber))
//     } else if (type == "-") {
//         console.log(Number(firstNumber)-Number(secondNumber))
//     } else if (type == "*") {
//         console.log(Number(firstNumber)*Number(secondNumber))
//     } else if (type == "/") {
//         console.log(Number(firstNumber)/Number(secondNumber))
//     } else {
//         console.log("Operação inválida!")
//     }
//     decision = prompt("Deseja continuar a operação(S/N)? ");
// }

// switch (type) {
//     case "+":
//         console.log(Number(firstNumber)+Number(secondNumber))
//         break;
//     case "-":
//         console.log(Number(firstNumber)-Number(secondNumber))
//         break;
//     case "*":
//         console.log(Number(firstNumber)*Number(secondNumber))
//         break;
//     case "/":
//         console.log(Number(firstNumber)/Number(secondNumber))
//         break;
//     default:
//         console.log("Operação inválida!")
//         break;
// }

// let peso = prompt("Digite seu peso: ")
// let altura = prompt("Digite sua altura: ")
// resultado = peso/altura**2;
// console.log(resultado.toFixed(2));

// let i, altura, totalPeso = 0, peso, maiorAltura = 0, menorAltura = 0, mediaPeso = 0, contaPeso = 0; 
// for(i = 1 ;i <= 5; i++) { 
//     altura = parseInt(prompt("Informe sua altura["+i+"]:")); 
//     peso = prompt("Digite seu peso: "); 
//     if(i==1) { 
//         menorAltura = altura; 
//     } 
//     if(altura > maiorAltura) { 
//         maiorAltura = altura; 
//     } 
//     if(altura < menorAltura) { 
//         menorAltura = altura; 
//     }
//     if (peso > 0) { 
//         contaPeso++; 
//     }
//     totalPeso += Number(peso);
// }
// console.log(totalPeso)
// mediaPeso = totalPeso/contaPeso 
// console.log("Média do peso é: "+mediaPeso) 
// console.log("A maior altura é: "+maiorAltura) 
// console.log("A menor altura é: "+menorAltura)