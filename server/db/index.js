// Database connection
const connection = require('./database');

//Seed db
const {
  users,
  categories,
  orders,
  products,
  orderitems,
  reviews,
  addresses,
} = require('./seeds');

// Sequelize models
const {
  User,
  Category,
  Product,
  Review,
  Order,
  Orderitem,
  Address,
} = require('./models');

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

Address.belongsTo(User);
User.hasMany(Address);

Order.belongsTo(Address);
Address.hasMany(Order);

// Clears database tables and repopulates it with seed data
const syncAndSeed = () => {
  return connection
    .sync({force: true})
    .then(async () => {
      // Hardcoded products from before are preserved
      const resolvedCategories = await Promise.all(
        categories.map(category => Category.create(category))
      );

      const [rings, bracelets, earrings, necklaces] = resolvedCategories;

      const resolvedProducts = await Promise.all(
        products.map(product => Product.create(product))
      );

      // const [
      //   ring1,
      //   ring2,
      //   bracelet1,
      //   bracelet2,
      //   earrings1,
      //   earrings2,
      //   necklace1,
      //   necklace2,
      //   ...nonHardcodedProducts
      // ] = resolvedProducts;

      // rings.setProducts([ring1, ring2]);
      // bracelets.setProducts([bracelet1, bracelet2]);
      // earrings.setProducts([earrings1, earrings2]);
      // necklaces.setProducts([necklace1, necklace2]);

      //Assign categoryIds randomly to products
      resolvedProducts.forEach(async nonHardcodedProduct => {
        const categoryId = Math.ceil(Math.random() * categories.length);

        //Hardcoded 16 pictures per category
        const randomImageNo = Math.ceil(Math.random() * 16);
        let randomImageNo1 = 0;
        let randomImageNo2 = 0;

        do {
          randomImageNo1 = Math.ceil(Math.random() * 16);
        } while (randomImageNo1 === randomImageNo);

        do {
          randomImageNo2 = Math.ceil(Math.random() * 16);
        } while (
          randomImageNo2 === randomImageNo ||
          randomImageNo2 === randomImageNo1
        );

        if (categoryId === 1) {
          nonHardcodedProduct.imageName = `/rings/${randomImageNo}.jpeg`;
          nonHardcodedProduct.sideImage = [
            `/rings/${randomImageNo1}.jpeg`,
            `/rings/${randomImageNo2}.jpeg`,
          ];
        }
        if (categoryId === 2) {
          nonHardcodedProduct.imageName = `/bracelets/${randomImageNo}.jpeg`;
          nonHardcodedProduct.sideImage = [
            `/bracelets/${randomImageNo1}.jpeg`,
            `/bracelets/${randomImageNo2}.jpeg`,
          ];
        }
        if (categoryId === 3) {
          nonHardcodedProduct.imageName = `/earrings/${randomImageNo}.jpeg`;
          nonHardcodedProduct.sideImage = [
            `/earrings/${randomImageNo1}.jpeg`,
            `/earrings/${randomImageNo2}.jpeg`,
          ];
        }
        if (categoryId === 4) {
          nonHardcodedProduct.imageName = `/necklaces/${randomImageNo}.jpeg`;
          nonHardcodedProduct.sideImage = [
            `/necklaces/${randomImageNo1}.jpeg`,
            `/necklaces/${randomImageNo2}.jpeg`,
          ];
        }

        nonHardcodedProduct.update({
          imageName: nonHardcodedProduct.imageName,
          sideImage: nonHardcodedProduct.sideImage,
        });
        nonHardcodedProduct.setCategory(categoryId);
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
      const resolvedCarts = await Promise.all(
        resolvedUsers.map(user =>
          Order.create({status: 'Cart', userId: user.id})
        )
      );
      resolvedReviews.forEach(async resolvedReview => {
        await resolvedReview.setUser(
          Math.ceil(Math.random() * resolvedUsers.length)
        );
      });
      resolvedReviews.forEach(async resolvedReview => {
        await resolvedReview.setProduct(
          Math.ceil(Math.random() * resolvedProducts.length)
        );
      });

      //Assign random orderID to users
      resolvedOrders.forEach(
        async order =>
          await order.setUser(Math.ceil(Math.random() * resolvedUsers.length))
      );

      //Assign userIds randomly to orders
      resolvedOrders.forEach(async resolvedOrder => {
        resolvedOrder.setUser(Math.ceil(Math.random() * resolvedUsers.length));
      });

      //Assign productIds randomly to orderitems
      resolvedOrderitems.forEach(async resolvedOrderitem => {
        resolvedOrderitem.setProduct(
          Math.ceil(Math.random() * resolvedProducts.length)
        );
      });

      //Assign addressIds randomly to users
      const resolvedAddresses = await Promise.all(
        addresses.map(address => Address.create(address))
      );
      await Promise.all(
        resolvedAddresses.map(address =>
          address.setUser(Math.ceil(Math.random() * resolvedUsers.length))
        )
      );

      //Assign addressIds randomly to Orders
      await Promise.all(
        resolvedOrders.map(resolvedOrder =>
          resolvedOrder.setAddress(
            Math.ceil(Math.random() * resolvedAddresses.length)
          )
        )
      );
    })
    .then(() => console.log('db seeded'))
    .catch(err => console.log(err));
};

const seedProducts = () => {
  return connection
    .sync({force: true})
    .then(() => Promise.all(categories.map(c => Category.create(c))))
    .then(categories => {
      return Promise.all(
        products.map((p, i) => {
          return Product.create({
            ...p,
            categoryId: categories[i % categories.length].id,
          });
        })
      );
    });
};

module.exports = {
  models: {
    User,
    Category,
    Product,
    Review,
    Order,
    Orderitem,
    Address,
  },
  methods: {
    syncAndSeed,
    seedProducts,
  },
};
