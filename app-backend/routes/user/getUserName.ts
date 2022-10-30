import createUserModel from '../../models/users'
import { Request, Response, NextFunction } from 'express';
import { Op } from "sequelize"

const getUserName = async (req: Request, res: Response) => {
    await createUserModel.findAll({
        where: {
            user_name: {
                [Op.eq]: req.query.uname
            }
        },
        attributes: [
            'id'
        ]
    })
        .then((Response) => {
            res.status(200).send(Response);
        })
        .catch((err) => {
            console.log(err.parent.detail);
        })
}

export default getUserName;