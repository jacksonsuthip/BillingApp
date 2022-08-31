import { Sequelize } from 'sequelize';
require('dotenv').config()

const db_name: any = process.env.db_name
const user_name: any = process.env.user_name
const password: any = process.env.password

const dataBase = new Sequelize(
    db_name,
    user_name,
    password,
    // 'testApp',
    // 'postgres',
    // 'amadis',
    {
        host: 'localhost',
        dialect: 'postgres'  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    });

export default dataBase;