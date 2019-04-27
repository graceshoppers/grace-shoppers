// Database connection
const connection = require('./database');

// Sequelize models
const User = require('./models/users-model');
const Category = require('./models/categories-model');
const Product = require('./models/products-model');
const Review = require('./models/reviews-model');

Category.hasMany(Product);
Product.belongsTo(Category);

// Clears database tables and repopulates it with seed data
const syncAndSeed = () => {
  connection
    .sync({force: true})
    .then(() =>
      Promise.all([
        Category.create({name: 'test category 1'}),
        User.create({
          firstName: 'test user 1',
          lastName: 'test',
          email: 'test@email.com',
          isAdmin: true,
        }),
      ])
    )
    .then(() =>
      Product.create({
        name: 'test product 1',
        color: 'blue',
        unitCost: 100,
        categoryId: 1,
      })
    )
    .then(() => console.log('db seeded'))
    .catch(err => console.log(err));
};

module.exports = {
  models: {
    User,
    Category,
    Product,
  },
  methods: {
    syncAndSeed,
  },
};
