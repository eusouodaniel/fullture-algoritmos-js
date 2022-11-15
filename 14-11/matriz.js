const promptSync = require('prompt-sync');
const prompt = promptSync();

//array unidimensional
let values = [[]];

for (let linha = 0; linha < 2; linha++) {
    values[linha] = [];
    for (let coluna = 0; coluna < 2; coluna++) {
        values[linha][coluna] = prompt("Digite seu nome: ")
    }
}

console.table(values)

// for (let value of values) {
//     console.log(value)
// }

// values.forEach(value => {
//     console.log(value)
// })

// console.table(values)