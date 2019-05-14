const faker = require('faker');

const makeFakeOrder = () => {
  return {
    status: faker.random.arrayElement(['Delivered', 'Processing', 'Shipped']),
  };
};

const orders = [];

for (let i = orders.length; i < 1; i++) {
  orders.push(makeFakeOrder());
}

module.exports = orders;
