import {Router} from "express";
import {GetAllPosts, WritePost} from "../../controllers/post/post";

const router = Router();

router.get('/post/all', GetAllPosts);
router.post('/post/write', WritePost);
export default router;