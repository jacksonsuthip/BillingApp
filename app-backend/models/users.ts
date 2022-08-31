import sequelizer from 'sequelize';
import dataBase from '../config/dbConnection';

const createUserModel = dataBase.define('users', {
    // Model attributes are defined here
    id: {
        type: sequelizer.INTEGER,
        // allowNull: false
        primaryKey: true,
        autoIncrement : true
    },
    lastName: {
        type: sequelizer.STRING
        // allowNull defaults to true
    }
})

export default createUserModel;
