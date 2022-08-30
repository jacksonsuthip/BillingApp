import { Sequelize } from 'sequelize';

const dataBase = new Sequelize(
    'billingapp',
    'postgres',
    'anto',
    {
        host: 'localhost',
        dialect: 'postgres'  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    });

module.exports = dataBase