import createUserModel from '../../models/users'
import { Request, Response, NextFunction } from 'express';

const createUser = async (req: Request, res: Response) => {

    try {

        
        await createUserModel.create({ lastName: "Doe" })
        .then(() => {
            res.status(201).send('OK');
        })
        .catch((err) => {
            console.log(err.parent.detail);
        })

        // res.status(201).json(req.body)
        // console.log("--=", req.body);
    } catch (err: any) {
        res.status(400).json({ message: err.message })
    }

    
}

export default createUser;