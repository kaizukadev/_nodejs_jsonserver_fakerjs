/*
https://github.com/Marak/faker.js/wiki/Person
*/

const faker = require('faker');

faker.locale = 'pt_BR';

const nomeC     = faker.name.findName();
const nome      = faker.name.firstName();
const sobrenome = faker.name.lastName();
const cargo     = faker.name.jobTitle();
const area      = faker.name.jobArea();
const tipo      = faker.name.jobType();
const desc      = faker.name.jobDescriptor();
const telefone  = faker.phone.phoneNumber();

console.log(`Nome Completo 1: ${nomeC}`);
console.log(`Nome Completo 2: ${nome} ${sobrenome}`);
console.log(`Cargo..........: ${cargo}`);
console.log(`Área...........: ${area}`);
console.log(`Tipo...........: ${tipo}`);
console.log(`Descrição......: ${desc}`);
console.log(`Telefone.......: ${telefone}`);

