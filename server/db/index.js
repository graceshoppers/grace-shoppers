// Database connection
const connection = require("./database");

// Sequelize models
const User = require("./models/users-model");
const Category = require("./models/categories-model");
const Product = require("./models/products-model");

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  models: {
    User,
    Category,
    Product
  }
};
