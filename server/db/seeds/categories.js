// const faker = require("faker");

//only need 4 categories, no faking needed

// const makeFakeCategory = () => {
//   return {
//     name: faker.commerce.product()
//   };
// };

const categories = [
  { name: "Rings" },
  { name: "Bracelets" },
  { name: "Earrings" },
  { name: "Necklaces" }
];

// for (let i = categories.length; i < ; i++) {
//   categories.push(makeFakeCategory());
// }

module.exports = categories;
