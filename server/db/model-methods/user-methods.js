// Not sure if this is the best way to go about creating instance methods
const {User, Order, Orderitem} = require('../models');

// This function will be used right after a user is successfully created.
// Example:
//     const user = await User.create({ firstName: 'Bob', lastName: 'Smith', ... })
//     await user.createCart()
User.prototype.createCart = async function() {
  const cart = await Order.create({status: 'Cart', userId: this.id});
  await User.update({cartNo: cart.id}, {where: {id: this.id}});
  return User.findOne({where: {id: this.id}});
};

// Allows API routes to call getCart function on found user instances
User.prototype.getCart = async function() {
  return await Orderitem.findAll({where: {orderId: this.cartNo}});
};

// Commented out because it wasn't working
// User.prototype.addToCart = async function(...args) {
//   return await Promise.all(
//     args.map(({id, quantity}) =>
//       Orderitem.create({
//         orderId: this.cartNo,
//         id,
//         quantity,
//       })
//     )
//   );
// };
