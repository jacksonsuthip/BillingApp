import createUserModel from '../../models/users'
import { Request, Response, NextFunction } from 'express';
import { Op } from "sequelize"

const getAllUsers = async (req: Request, res: Response) => {
    await createUserModel.findAll({
        // where: {
        //     id: {
        //         [Op.eq]: 2
        //     }
        // }
        attributes: [
            'id', 'name', 'second_name', 'ph_no'
        ]
    })
        .then((Response) => {
            res.status(200).send(Response);
        })
        .catch((err) => {
            console.log(err.parent.detail);
        })
}

export default getAllUsers;