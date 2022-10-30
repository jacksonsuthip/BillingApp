import sequelizer from 'sequelize';
import dataBase from '../config/dbConnection';

const createUserModel = dataBase.define('users', {
    id: {
        type: sequelizer.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelizer.STRING,
        allowNull: false,
    },
    second_name: {
        type: sequelizer.STRING
    },
    ph_no: {
        type: sequelizer.INTEGER
    },
    country_code: {
        type: sequelizer.STRING
    },
    email: {
        type: sequelizer.STRING,
        validate: {
            isEmail: true
        }
    },
    user_name: {
        type: sequelizer.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: sequelizer.STRING,
        allowNull: false,
    },
    user_expiry_date: {
        type: sequelizer.DATEONLY
    },
    is_admin: {
        type: sequelizer.BOOLEAN,
        defaultValue: false
    }
})

export default createUserModel;
