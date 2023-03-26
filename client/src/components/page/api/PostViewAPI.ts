import {PostType} from "../../types";
import {CommonResponse} from "./Response";

interface PostViewAllResponse extends CommonResponse{

    posts: PostType[];
};

interface PostViewEachResponse extends CommonResponse {
    post?: PostType;
}

const FetchPostViewAll =  async (): Promise<PostViewAllResponse> => {
    try {
        const response = await fetch('/api/post/all', {
            method: 'GET',
            mode: "cors"
        });

        const data: PostViewAllResponse = await response.json();

        return data;
    } catch (e) {
        const data: PostViewAllResponse = {
            result: false,
            msg: `데이터를 가져올 수 없음. ${JSON.stringify(e)}`,
            posts: []
        };

        return data;
    }
}

const FetchPostViewEach = async (postId: number): Promise<PostViewEachResponse> => {
    try {
        const response = await fetch(`/api/post/${postId}`, {
            method: 'GET',
            mode: 'cors'
        })

        const data: PostViewEachResponse = await response.json();

        return data;
    } catch(e) {
        const data: PostViewEachResponse = {
            result: false,
            msg: `데이터를 가져올 수 없음. ${JSON.stringify(e)}`,
        };

        return data;
    }
}

export {FetchPostViewAll, FetchPostViewEach};
export type {PostViewAllResponse, PostViewEachResponse};