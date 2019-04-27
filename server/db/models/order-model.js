const connection = require('../database')
const { Sequelize: {DECIMAL, INTEGER} } = connection

const Order = connection.define('order', {
    quantity: {
        type: INTEGER,
        allowNull: false,
        validate:{
            min:1,
            notEmpty: true
        }
    },
    unitCost: {
        type: DECIMAL(10,2),
        allowNull: false,
        validate:{
            min:0.01,
            notEmpty: true
        }
    }
})

module.exports = Order