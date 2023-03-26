import {CommonResponse} from "../../common/api/Response";
import {CommentType} from "../Comment";
import {PostViewEachResponse} from "../../post/api/PostViewAPI";
import exp from "constants";

interface CommentsResponse extends CommonResponse {
    comments: CommentType[];
}

const FetchComments = async (id: number): Promise<CommentsResponse> => {
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

export {FetchComments};
export type {CommentsResponse};