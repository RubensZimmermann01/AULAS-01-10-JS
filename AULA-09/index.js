// Tipos de Dados Primitivos
// string, number, undefined, null, boolean, *symbol*

const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // undefined = Não aposta para local nenhum na memoria.
const sobrenomeAluno = null; //Nulo -> Não aposta para local nenhum na memoria.
const aprovado = false; // Boolean = true, false (logico)

// console.log (typeof nome, nome); // verifica o "tipo" e o "valor"

let a = 2;
const b = a;
console.log (a, b); // 2, 2

a = 3;
console.log (a, b); //3, 2