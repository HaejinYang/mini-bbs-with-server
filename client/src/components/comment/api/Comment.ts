import {CommonResponse} from "../../common/api/Response";
import {CommentType} from "../Comment";

type RequestWriteCommentType = Pick<CommentType, "postId" | "body" | "writer">

interface CommentsResponse extends CommonResponse {
    comments: CommentType[];
}

const RequestGetComments = async (id: number): Promise<CommentsResponse> => {
    try {
        const response = await fetch(`/api/comments/${id}`, {
            method: 'GET',
            mode: 'cors'
        });

        const comment = await response.json();

        return comment;
    } catch (e) {
        const data: CommentsResponse = {
            result: false,
            msg: `데이터를 가져올 수 없음. ${JSON.stringify(e)}`,
            comments: [],
        };

        return data;
    }
}

const RequestWriteComment = async (comment: RequestWriteCommentType) => {
    try {
        const res = await fetch('/api/comment/write', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        });
    } catch (e) {

    }
}

export {RequestGetComments, RequestWriteComment};
export type {CommentsResponse};