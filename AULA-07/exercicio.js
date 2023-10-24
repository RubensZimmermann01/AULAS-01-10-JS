/*
Luiz Otavio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otavio nasceu em 1980
*/

const nome = 'Luiz Otavio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // Sem Valor
let anoNascimento; // Sem Valor

imc = peso / ( alturaEmM * alturaEmM); //Atribui um Valor ao imc
anoNascimento = 2023 - idade; //Atribui um Valor ao anoNascimento

// sinal "+"  faz junção
// template strings

console.log (nome + ' ' + sobreNome, 'tem', idade, 'anos, pesa', peso + 'kg tem',);
console.log (alturaEmM,'de altura e seu IMC é de', imc,);
console.log (`${nome} nasceu em ${anoNascimento}.`); //template strings
