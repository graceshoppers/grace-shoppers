const faker = require("faker");

const makeFakeReview = () => {
  return {
    textBody: faker.lorem.paragraph(),
    stars: faker.random.number({ min: 1, max: 5 })
  };
};

const reviews = [];

for (let i = reviews.length; i < 1000; i++) {
  reviews.push(makeFakeReview());
}

module.exports = reviews;
