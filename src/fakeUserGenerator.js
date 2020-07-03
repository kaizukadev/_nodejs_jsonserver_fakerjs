const faker = require('faker/locale/pt_BR');
const fs = require('fs');

function generateUsers(start, end) {
    let users = [];
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

    const cars = ['Audi', 'BMW', 'Mercedes', 'Porsche', 'Volkswagen'];
    let estoque = [];
    for (let id = 1; id <= cars.length; id++) {
        const marca     = cars[id-1];
        const uuid      = faker.random.uuid();
        const quant     = faker.random.number({min:2, max:10});
        const disp      = faker.random.boolean();

        estoque.push({
            id: id,
            marca: marca,
            uuid: uuid,
            quant: quant,
            disp: disp
        });
    }

    return { data: users, estoque };
}

const genData = generateUsers(1, 100);
fs.writeFileSync('cadastro.json', JSON.stringify(genData, null, '\t'));











