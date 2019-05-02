const connection = require('../database')
const { Sequelize: {STRING} } = connection

const Category = connection.define('category', {
    name: {
        type: STRING,
        allowNull: false,
        notEmpty: true,
    },
})

module.exports = Category