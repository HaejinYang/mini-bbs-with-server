import { Router } from "express";
import {
  GetCommentsInPost,
  WriteComment,
} from "../../controllers/comment/comment";

const router = Router();

router.post("/comment/write", WriteComment);
router.get("/comments/:postId", GetCommentsInPost);

export default router;