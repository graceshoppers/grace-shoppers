const faker = require('faker');

const makeFakeOrderItem = () => {
  return {
    quantity: faker.random.number({min: 1, max: 99}),
  };
};

const orderitems = [];

for (let i = orderitems.length; i < 1000; i++) {
  orderitems.push(makeFakeOrderItem());
}

module.exports = orderitems;
