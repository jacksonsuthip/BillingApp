// const userSchema = require('../../models/user')
import express, { Request, Response, NextFunction } from 'express';

exports.createUser = (req: Request, res: Response) => {
    try {
        res.status(201).json(req.body)
        console.log("=", req.body);
    } catch (err) {
        // res.status(400).json({ message: err.message })
    }
}