/*
https://github.com/Marak/faker.js/wiki/Dates
Past     faker.date.past(years, refDate)
Future   faker.date.future(years, refDate)
Between  faker.date.between(Date1,Date2)
Recent   faker.date.recent(days)
*/

const faker = require('faker');
faker.locale = 'pt_BR';

const diaDaSemana = faker.date.weekday();
const mes         = faker.date.month();
const dataPassada = faker.date.past();
const dataRecente = faker.date.recent(3);
const dataFutura  = faker.date.future();
const dataEntre   = faker.date.between(dataPassada, dataFutura);
const dataEntre2  = faker.date.between('2020-06-20', '2020-07-15');

console.log(`Dia da Semana: ${diaDaSemana}`);
console.log(`Mês..........: ${mes}`);
console.log(`Data Passada.: ${dataPassada}`);
console.log(`Data Futura..: ${dataFutura}`);
console.log(`Data Entre...: ${dataEntre}`);
console.log(`Data Entre 2.: ${dataEntre2}`);
console.log(`Data Recente.: ${dataRecente}`);
