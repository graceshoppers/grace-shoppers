const connection = require('../database')
const { Sequelize: { TEXT } } = connection

const Review = connection.define('review', {
    textBody: {
        type: TEXT,
        allowNull: false,
        validate:{
            len:[10],
            notEmpty: true
        }
    }
})

module.exports = Review