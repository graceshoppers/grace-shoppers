const connection = require('../database');
const {Sequelize: {STRING}} = connection;

const address = connection.define('address',{
  address1:{
    type: STRING,
    allowNull: false,
  },
  address2:{
    type: STRING,
  }
})
