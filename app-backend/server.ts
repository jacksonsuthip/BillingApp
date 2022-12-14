import express from 'express';
import createTabels from './config/dbTabelCreate';
const app = express();
const cors = require('cors');

app.use(express.json()) // to accpet json
app.use(cors())

// db connection function
createTabels()

// BillingApp Project
import appRouter from './routes/mainRoute';
app.use('/api', appRouter)

app.listen(7000, () => console.log("Server Started"))
