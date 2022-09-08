import createUserModel from '../../models/users'
import { Request, Response, NextFunction } from 'express';

const createUser = async (req: Request, res: Response) => {

    const result = {
        name: req.body.name,
        second_name: req.body.secondName,
        ph_no: req.body.phNo,
        country_code: req.body.countryCode,
        email: req.body.email,
        user_name: req.body.userName,
        password: req.body.password,
        user_expiry_date: req.body.userExpiryDate,
        is_admin: req.body.isAdmin
    }

    await createUserModel.create(result)
        .then(() => {
            res.status(201).send('OK');
        })
        .catch((err) => {
            console.log(err.parent.detail);
        })
}

export default createUser;