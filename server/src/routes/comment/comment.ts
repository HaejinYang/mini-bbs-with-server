import {Router} from "express";
import {WriteComment} from "../../controllers/comment/comment";

const router = Router();

router.post('/comment/write', WriteComment);
router.get('/comments/:postId');
router.get('/comment/:id');

export default router;