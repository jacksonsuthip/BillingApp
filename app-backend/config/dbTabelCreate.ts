import dataBase from './dbConnection';
import createUser from '../models/users';
import createTable from '../models/usersTable';

const createTabels = () => {
    try {
        dataBase.authenticate()
            .then(() => {
                createTable.sync(),
                createUser.sync()
            })
        console.log('dataBase Connection successfull.');
    } catch (error) {
        console.error('database error-', error);
    }
}

export default createTabels;