const faker = require('faker');

const makeFakeAddress = () => {
  return {
    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    addressLine1: faker.address.streetAddress(),
    addressLine2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    phoneNumber: faker.phone.phoneNumber(),
    additionalInstruction: faker.lorem.paragraph(),
  };
};

const addresses = [];

for (let i = 0; i < 140; i++) {
  const address = makeFakeAddress();
  addresses.push(address);
}

module.exports = addresses;
