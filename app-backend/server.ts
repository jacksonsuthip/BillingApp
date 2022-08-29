import express, { Request, Response, NextFunction } from 'express';
const app = express();

// NextJs project
const appRouter = require('./routes/mainRoute')
app.use('/api', appRouter)


app.listen(7000, () => console.log("Server Started"))

