import {PostType} from "../PostItem";
import {CommonResponse} from "../../common/api/Response";

interface PostWriteResponse extends CommonResponse {
    id: number;
}

type PostWriteRequest = Pick<PostType, "title" | "body" | "writer">

const RequestPostWrite = async (post: PostWriteRequest): Promise<number> => {
    try {
        const response = await fetch('/api/post/write', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),
        });

        const data: PostWriteResponse = await response.json();
        return data.id;
    } catch(e) {
        return -1;
    }
}

export {RequestPostWrite};
export type {PostWriteRequest};