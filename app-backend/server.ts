require('dotenv').config()

import express from 'express';
const app = express();
const dataBase = require('./config/dbConnection')
app.use(express.json()) // to accpet json

// db connection
const createUser = require('./models/users');
try {
    dataBase.authenticate()
        .then(() => {
            createUser.sync();
        })
    console.log('dataBase Connection successfull.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// NextJs project
const appRouter = require('./routes/mainRoute')
app.use('/api', appRouter)

app.listen(7000, () => console.log("Server Started"))
