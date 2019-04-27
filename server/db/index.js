// Database connection
const connection = require('./database')

// Sequelize models
const User = require('./models/users-model')
const Category = require('./models/categories-model')
const Product = require('./models/products-model')

Category.hasMany(Product)
Product.belongsTo(Category)

// Clears database tables and repopulates it with seed data
const syncAndSeed = () => {
    connection.sync({force: true})
}

module.exports = {
    models: {
        User,
        Category,
        Product,
    },
    methods: {
        syncAndSeed,
    },
}