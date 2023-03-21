import {Router} from "express";
import Post from "../../models/post/post";

const router = Router();

router.get('/post/all', async (req, res) => {
    const result = await Post.FindAll();

    res.status(200).json(result);
});

export default router;