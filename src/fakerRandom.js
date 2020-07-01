/*
https://github.com/Marak/faker.js/wiki/Random
Whole Number    faker.random.number(range) Random number between 0 and "range"
Decimal number  faker.finance.amount(min,max,decimal places) Random number between "min" and "max" including decimals to X digits.
Boolean         faker.random.boolean()
Array Element   faker.random.arrayElement(array[]) Selects a random element from an array of possible values.
Alphanumeric    faker.random.alphaNumeric(count)
*/

const faker = require('faker/locale/pt_BR');
//faker.locale = 'pt_BR';

const cars = ['Audi', 'BMW', 'Mercedes', 'Porsche', 'Volkswagen'];

const numero       = faker.random.number();
const numeroFaixa  = faker.random.number({min:1000, max:2000});
const financeiro   = faker.finance.amount(1000, 2000, 2, 'R$ ');
const boolean      = faker.random.boolean();
const elementArray = faker.random.arrayElement(cars);
const alfaNumerico = faker.random.alphaNumeric(6);
const uuid         = faker.random.uuid();
const palavra      = faker.random.word();
const palavras     = faker.random.words();


console.log(`Número Genérico.......................: ${numero}`);
console.log(`Número entre 1000 e 2000..............: ${numeroFaixa}`);
console.log(`Valor entre 1000 e 2000 - 2 decimais..: ${financeiro}`);
console.log(`Elemento de array.....................: ${elementArray}`);
console.log(`Sequência alfanumérica de 6 caracteres: ${alfaNumerico}`);
console.log(`UUID..................................: ${uuid}`);
console.log(`Palavra...............................: ${palavra}`);
console.log(`Palavras aleatórias ..................: ${palavras}`);

console.log(`UUID..................................: ${faker.image.image()}`);
console.log(`Palavra...............................: ${faker.image.avatar()}`);
console.log(`Palavras aleatórias ..................: ${faker.image.food()}`);
