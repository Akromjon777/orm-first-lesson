import { Router } from "express";
import postController from "../controller/post.controller";
import userController from "../controller/user.controller";

const router = Router()

export default router
    .get('/users/get', userController.GET)
    .post('/user/add', userController.POST)
    .put('/user/update/:id', userController.PUT)
    .delete('/user/delete/:id', userController.DELETE)
    .get('/posts/get', postController.GET)
    .post('/post/add', postController.POST)
    .put('/post/update/:id', postController.PUT)
    .delete('/post/delete/:id', postController.DELETE)