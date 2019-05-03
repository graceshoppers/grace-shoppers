const faker = require('faker');

const makeFakeUser = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    isAdmin: faker.random.boolean(),
    password: 'password',
  };
};

const users = [
  {
    firstName: 'Kyle',
    lastName: 'Jiang',
    email: 'kylejiang@email.com',
    isAdmin: true,
    password: 'password',
  },
  {
    firstName: 'Kevin',
    lastName: 'Han',
    email: 'kevinhan@email.com',
    isAdmin: true,
    password: 'password',
  },
  {
    firstName: 'Mariano',
    lastName: 'Fuentes',
    email: 'marianofuentes@email.com',
    isAdmin: true,
    password: 'password',
  },
  {
    firstName: 'Bao',
    lastName: 'Nguyen',
    email: 'baonguyen@email.com',
    isAdmin: true,
    password: 'password',
  },
  {
    firstName: 'Adam',
    lastName: 'Smith',
    email: 'adamsmith@email.com',
    isAdmin: false,
    password: 'password',
  },
];

// for (let i = users.length; i < 100; i++) {
//   users.push(makeFakeUser());
// }

module.exports = users;
