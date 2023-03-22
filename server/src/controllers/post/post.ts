import {Request, Response} from "express";
import Post from "../../models/post/post";

const GetAllPosts = async (req: Request, res: Response) => {
    const result = await Post.FindAll();

    res.status(200).json(result);
}

const WritePost = async (req: Request, res: Response) => {
    const {title, body, writer}: { title: string, body: string, writer: string } = req.body;

    const post = new Post(title, body, writer);
    try {
        const result = await post.Save();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json(e);

    }
}

const GetPost = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    if(isNaN(id)) {
        return res.status(400).json({msg: `invalid params ${id}`});
    }

    try {
        const post = await Post.Find(id);
        res.status(200).json(post);
    } catch (e) {

        res.status(500).json(e);
    }
}

export {GetAllPosts, WritePost, GetPost};