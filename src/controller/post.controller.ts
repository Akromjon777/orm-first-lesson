import {Request, Response} from 'express'
import dataSourse from '../config/config'
import { Posts } from '../entities/post.entities'

class PostController {
    public async GET(req: Request, res: Response): Promise<void>{
        const allPosts = await dataSourse.getRepository(Posts).find()

        res.status(200).json(allPosts)
    }

    public async POST(req: Request, res: Response): Promise<void>{
        const {title, user_id} = req.body
        const newPost = await dataSourse.getRepository(Posts)
        .createQueryBuilder()
        .insert()
        .into(Posts)
        .values({title:title, user_id:user_id})
        .returning([title, user_id])
        .execute()

        res.status(200).json(newPost)
    }

    public async PUT(req: Request, res: Response): Promise<void>{
        const {id} = req.params
        const {title, user_id} = req.body
        const updatedPost = await dataSourse.getRepository(Posts)
        .createQueryBuilder()
        .update(Posts)
        .set({title:title, user_id})
        .where('id = :id', {id})
        .execute()

        res.status(200).json("Successfully updated")
    }

    public async DELETE(req: Request, res: Response): Promise<void>{
        const {id} = req.params
        const deleted = await dataSourse.getRepository(Posts)
        .createQueryBuilder()
        .delete()
        .from(Posts)
        .where('id = :id', {id})
        .execute()

        res.status(200).json("Successfully deleted")
    }
}

export default new PostController()