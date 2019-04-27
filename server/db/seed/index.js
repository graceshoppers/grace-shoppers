const connection = require("../database");
const {
  models: { User, Category, Product }
} = require("../index");

// Import seed data
const categories = require("./categories-seed");
const necklaces = require("./necklaces-seed");

const seed = async () => {
  try {
    await connection.sync({ force: true });

    // Create categories in database
    const [
      necklaceCategory,
      braceletCategory,
      ringCategory,
      earringCategory
    ] = await Promise.all(
      categories.map(category => Category.create(category))
    );

    // Create necklaces in database
    await Promise.all(
      necklaces.map(necklace =>
        Product.create({ ...necklace, categoryId: necklaceCategory.id })
      )
    );

    console.log("Database was successfully seeded!");
  } catch (err) {
    throw new Error(err);
  }
};

seed();
