const faker = require('faker');

const makeFakeReview = () => {
  return {
    textBody: faker.lorem.paragraph(),
    stars: faker.random.number({min: 1, max: 5}),
    title: faker.lorem.sentence(),
    recommended: faker.random.boolean(),
  };
};

const reviews = [];

for (let i = reviews.length; i < 10; i++) {
  reviews.push(makeFakeReview());
}

module.exports = reviews;
