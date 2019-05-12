// Not sure if this is the best way to go about creating instance methods
const {User, Order, Orderitem} = require('../models');

// This function will be used right after a user is successfully created.
// Example:
//     const user = await User.create({ firstName: 'Bob', lastName: 'Smith', ... })
//     await user.createCart()
User.prototype.createCart = function() {
  return Order.create({status: 'Cart', userId: this.id}).then(
    cart => (this.cartNo = cart.id)
  );
};

// Allows API routes to call getCart function on found user instances
User.prototype.getCart = function() {
  return Orderitem.findAll({where: {orderId: this.cartNo}});
};
