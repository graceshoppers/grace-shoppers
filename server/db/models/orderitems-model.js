const connection = require('../database')
const { Sequelize: { INTEGER } } = connection

const OrderItem = connection.define('orderitem', {
    quantity: {
        type: INTEGER,
        allowNull: false,
        validate:{
            min:1,
            max:99,
            notEmpty: true
        }
    }
})

module.exports = OrderItem