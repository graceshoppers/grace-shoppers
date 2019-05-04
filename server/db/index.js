// Database connection
const connection = require('./database');

//Seed db
const {
  users,
  categories,
  orders,
  products,
  orderitems,
  reviews
} = require("./seeds");

// Sequelize models
const {
  User,
  Category,
  Product,
  Review,
  Order,
  Orderitem
} = require("./models");

Product.belongsTo(Category);
Category.hasMany(Product);

Order.belongsTo(User);
User.hasMany(Order);

Orderitem.belongsTo(Order);
Order.hasMany(Orderitem);

Orderitem.belongsTo(Product);
Product.hasMany(Orderitem);

Product.hasMany(Review);
Review.belongsTo(Product);

Review.belongsTo(User);
User.hasMany(Review);

// Clears database tables and repopulates it with seed data
const syncAndSeed = () => {
  connection
    .sync({force: true})
    .then(async () => {
      // Hardcoded products from before are preserved
      const resolvedCategories = await Promise.all(
        categories.map(category => Category.create(category))
      );

      const [rings, bracelets, earrings, necklaces] = resolvedCategories;

      const resolvedProducts = await Promise.all(products.map(product => Product.create(product)));

      const [
        ring1,
        ring2,
        bracelet1,
        bracelet2,
        earrings1,
        earrings2,
        necklace1,
        necklace2,
        ...nonHardcodedProducts] = resolvedProducts

      console.log(Array.isArray(resolvedProducts));

      rings.setProducts([ring1, ring2]);
      bracelets.setProducts([bracelet1, bracelet2]);
      earrings.setProducts([earrings1, earrings2]);
      necklaces.setProducts([necklace1, necklace2]);

      //Assign categoryIds randomly to products
      nonHardcodedProducts.forEach(async nonHardcodedProduct => {
        nonHardcodedProduct.setCategory(
          Math.ceil(Math.random() * categories.length)
        );
      });

      //Assign orderIds randomly to orderitems
      const resolvedOrders = await Promise.all(
        orders.map(order => Order.create(order))
      );
      const resolvedOrderitems = await Promise.all(
        orderitems.map(orderitem => Orderitem.create(orderitem))
      );
      resolvedOrderitems.forEach(async resolvedOrderitem => {
        await resolvedOrderitem.setOrder(
          Math.ceil(Math.random() * resolvedOrders.length)
        );
      });

      //Assign userIds randomly to reviews
      //Assign productIds randomly to reviews
      const resolvedReviews = await Promise.all(
        reviews.map(review => Review.create(review))
      );
      const resolvedUsers = await Promise.all(
        users.map(user => User.create(user))
      );
      resolvedReviews.forEach(async resolvedReview => {
        await resolvedReview.setUser(
          Math.ceil(Math.random() * resolvedUsers.length)
        );
      });
      resolvedReviews.forEach(async resolvedReview => {
        await resolvedReview.setProduct(Math.ceil(Math.random() * resolvedProducts.length)); 
      });

      //Assign userIds randomly to orders
      resolvedOrders.forEach(async resolvedOrder => {
        resolvedOrder.setUser(Math.ceil(Math.random() *resolvedUsers.length))
      })

      //Assign productIds randomly to orderitems
      resolvedOrderitems.forEach(async resolvedOrderitem => {
        resolvedOrderitem.setProduct(Math.ceil(Math.random() * resolvedProducts.length))
      })
    })
    .then(() => console.log('db seeded'))
    .catch(err => console.log(err));
};

module.exports = {
  models: {
    User,
    Category,
    Product,
    Review,
    Order,
    Orderitem
  },
  methods: {
    syncAndSeed,
  },
};
