import {Request, Response} from "express";
import {plainToInstance} from "class-transformer";
import CommentInPost, {CommentDto} from "../../models/comment/comment";
import {validate} from "class-validator";

interface ResultMsg {
    result: boolean;
    msg: string;
}

interface ResultMsgWriteComment extends ResultMsg {
    id: number;
}

const GetComment = (req: Request, res: Response) => {

};

const GetCommentsInPost = (req: Request, res: Response) => {

}

const WriteComment = async (req: Request, res: Response) => {
    const reqComment: CommentDto = plainToInstance(CommentDto, req.body);

    try {
        await validate(reqComment);

        const comment = new CommentInPost(reqComment.body, reqComment.writer);
        const result = await comment.Save();
        const retMsg: ResultMsgWriteComment = {
            result: true,
            msg: "댓글 쓰기 성공",
            id: result.insertId
        };

        res.status(200).json(retMsg);
    } catch (e) {
        const retMsg: ResultMsg = {
            result: false,
            msg: "댓글 쓰기 실패"
        };

        res.status(400).json(retMsg);
    }
}

export {GetComment, GetCommentsInPost, WriteComment};