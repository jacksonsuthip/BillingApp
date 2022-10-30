import createUserModel from '../../models/users'
import { Request, Response, NextFunction } from 'express';
import { Op } from "sequelize"
const bcrypt = require("bcrypt");

const userLogin = async (req: Request, res: Response) => {
    await createUserModel.findAll({
        where: {
            user_name: {
                [Op.eq]: req.query.uname
            }
        },
        attributes: ['id', 'password'],
        raw: true
    })
        .then((Response: any) => {
            const data: { id: number, password: string } = Response[0]
            const result = bcrypt.compareSync(req.query.password, data.password);
            console.log(result);
            if (result) {
                res.status(200).send(Response);
            } else {
                res.status(200).send([]);
            }
        })
        .catch((err) => {
            console.log(err.parent);
        })
}

export default userLogin;