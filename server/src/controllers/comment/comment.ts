import {Request, Response} from "express";
import {instanceToPlain, plainToInstance} from "class-transformer";
import CommentInPost, {CommentDto} from "../../models/comment/comment";
import {validate} from "class-validator";

interface ResultMsg {
    result: boolean;
    msg: string;
}

interface ResultMsgWriteComment extends ResultMsg {
    id: number;
}

interface ResultMsgGetCommentsInPost extends ResultMsg {
    comments: object;
}

const GetCommentsInPost = async (req: Request, res: Response) => {
    const postId: number = parseInt(req.params.postId);
    if(isNaN(postId)) {
        const retMsg: ResultMsg = {
            result: false,
            msg: "올바른 게시글 아이디가 아닙니다."
        }

        return res.status(400).json(retMsg);
    }

    try {
        const result: CommentDto[] = await CommentInPost.GetCommentsInPost(postId);
        const retMsg: ResultMsgGetCommentsInPost = {
            result: true,
            msg: "댓글 가져오기 성공",
            comments: instanceToPlain(result)
        }

        return res.status(200).json(retMsg);
    } catch (e) {
        const retMsg: ResultMsg = {
            result: false,
            msg: "댓글을 가져올 수 없습니다."
        }

        return res.status(500).json(retMsg);
    }
}

const WriteComment = async (req: Request, res: Response) => {
    const reqComment: CommentDto = plainToInstance(CommentDto, req.body);

    try {
        await validate(reqComment);

        const comment = new CommentInPost(reqComment.postId, reqComment.body, reqComment.writer);
        const result = await comment.Save();
        const retMsg: ResultMsgWriteComment = {
            result: true,
            msg: "댓글 쓰기 성공",
            id: result[0].insertId
        };

        res.status(200).json(retMsg);
    } catch (e) {
        const retMsg: ResultMsg = {
            result: false,
            msg: `댓글 쓰기 실패: ${JSON.stringify(e)}`
        };

        res.status(400).json(retMsg);
    }
}

export {GetCommentsInPost, WriteComment};