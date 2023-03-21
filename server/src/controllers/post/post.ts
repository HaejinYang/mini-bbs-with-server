import {Request, Response} from "express";
import Post from "../../models/post/post";

const GetAllPosts = async (req: Request, res: Response) => {
    const result = await Post.FindAll();

    res.status(200).json(result);
}

const WritePost = async (req: Request, res: Response) => {
    const post = new Post('title1', 'body1', 'writer1');

    await post.Save();
}

export {GetAllPosts, WritePost};