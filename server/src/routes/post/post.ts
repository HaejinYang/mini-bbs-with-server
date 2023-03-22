import {Router} from "express";
import {GetAllPosts, GetPost, WritePost} from "../../controllers/post/post";

const router = Router();

router.get('/post/all', GetAllPosts);
router.post('/post/write', WritePost);
router.get('/post/:id', GetPost);
export default router;