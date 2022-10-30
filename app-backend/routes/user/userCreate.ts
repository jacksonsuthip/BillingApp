import createUserModel from '../../models/users'
import { Request, Response, NextFunction } from 'express';
const bcrypt = require("bcrypt");

const createUser = async (req: Request, res: Response) => {
    try {
        const ePassword = bcrypt.hashSync(req.body.password, 10);
        const result = {
            name: req.body.name,
            second_name: req.body.secondName,
            ph_no: req.body.phNo,
            country_code: req.body.countryCode,
            email: req.body.email,
            user_name: req.body.userName,
            password: ePassword,
            user_expiry_date: req.body.userExpiryDate,
            is_admin: req.body.isAdmin
        }
        await createUserModel.create(result)
            .then(() => {
                res.status(201).send('OK');
            })
            .catch((err) => {
                console.log(err.parent);
            })
    } catch (err) {
        console.log("error--> ", err);
    }
}

export default createUser;