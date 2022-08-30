const sequelizer = require('sequelize');
const dataBase = require('../config/dbConnection');

const createUser = dataBase.define('users', {
    // Model attributes are defined here
    id: {
        type: sequelizer.INTEGER,
        // allowNull: false
        primaryKey: true
    },
    lastName: {
        type: sequelizer.STRING
        // allowNull defaults to true
    }
})

module.exports = createUser

