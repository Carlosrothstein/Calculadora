const prompt = require('prompt-sync')();

let numero1 = prompt('Digite um número: ');
let operacao = prompt('Digite a operação: ');
let numero2 = prompt('Digite outro número: ');
let resultado 

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

if (typeof numero1 == 'number' &&  typeof numero2 == 'number') {
    switch (operacao) {
        case '+':
            resultado = numero1 + numero2
            break;
        case '-':
            resultado = numero1 - numero2
            break;
        case '*':
            resultado = numero1 * numero2
            break;
        case '/':
            resultado = numero1 / numero2
            break;
        case '%':
            resultado = numero1 * numero2 && numero1 / numero2
            break;
        default:
            console.log('Operação inválida. ')
    }
}
console.log(`O resultado é ${resultado}`)