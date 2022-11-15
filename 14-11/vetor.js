const promptSync = require('prompt-sync');
const prompt = promptSync();

// forma não literal - vazia
let names = ['Daniel', 'Wilton', 'Thiago', 'Davi', 'Pâmela']
// let notas = [60,70,90,95,80,90,100]

console.table(names.join())

// let notasFiltradas = notas.filter(function(nota) {
//     return nota > 80
// })
// console.log(notasFiltradas);

// let notas2 = []
// notas1.concat(notas2)
// const notasSomadas = notas.map(nota => nota > 60)
// console.log(notasSomadas)
// let notasFiltradas = notas.find(nota => nota > 60)
 
// let namesAndNotas = names.concat(notas)

// console.log(names.indexOf("Thiagoo"))

// names.push('Lucas');
// names.unshift('Marcos');
// names.pop();
// names.shift();


// for(let x = 0; x < 5; x++) {
//     names[x] = prompt("Digite um nome: ")
// }

// console.table(names)

// names.forEach(name => {
//     console.log(name)
// })