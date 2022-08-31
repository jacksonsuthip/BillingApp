import sequelizer from 'sequelize';
import dataBase from '../config/dbConnection';

const createTable = dataBase.define('userTable', {
    // Model attributes are defined here
    id: {
        type: sequelizer.INTEGER,
        // allowNull: false
        primaryKey: true
    },
    firstName: {
        type: sequelizer.STRING
        // allowNull defaults to true
    }
})

export default createTable;
