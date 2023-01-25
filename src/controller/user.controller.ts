import { Request, Response } from "express"
import { Users } from "../entities/user.entities"
import dataSource from '../config/config';

class UserController{
    public async GET(req:Request, res:Response){
const allUsers = await dataSource.getRepository(Users).find()
res.json(allUsers)
    }

    public async POST(req:Request, res:Response){
        const {name, age} = req.body
        const newUser = await dataSource.getRepository(Users)
        .createQueryBuilder()
        .insert()
        .into(Users)
        .values({name, age})
        .returning([name, age])
        .execute()

        res.status(201).json(newUser)
    }

    public async PUT(req:Request, res:Response){
        const {id} = req.params
        const {name, age} = req.body

        const updated = await dataSource.getRepository(Users)
        .createQueryBuilder()
        .update(Users)
        .set({ name:name, age:age })
        .where('id = :id', {id})
        .execute()

        res.json("Successfully updated")
    }

    public async DELETE(req:Request, res:Response){
        const {id} = req.params

        const deleted = await dataSource.getRepository(Users)
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where('id = :id', {id})
        .execute()

        res.status(204).json("Successfully deleted")
    }
}

export default new UserController()
