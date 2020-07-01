const faker = require('faker/locale/pt_BR');
const fs = require('fs');

function generateUsers(start, end) {
    let users = [];
    let cars = [];
    for (let id = start; id <= end; id++) {
        const nome      = faker.name.firstName();
        const sobrenome = faker.name.lastName();
        const email     = faker.internet.email();
        const fone      = faker.phone.phoneNumber();
        const cargo     = faker.name.jobTitle();

        users.push({
            id: id,
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            fone: fone,
            cargo: cargo
        });
    }
    return { data: users, cars };
}

const genData = generateUsers(1, 100);
fs.writeFileSync('cadastro.json', JSON.stringify(genData, null, '\t'));











