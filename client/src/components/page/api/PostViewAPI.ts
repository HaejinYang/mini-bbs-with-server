import {PostType} from "../../types";

interface IPostViewAllResponse {
    result: boolean;
    msg: string;
    posts: PostType[];
};

const FetchPostViewAll =  async (): Promise<IPostViewAllResponse> => {
    try {
        const response = await fetch('/api/post/all', {
            method: 'GET',
            mode: "cors"
        });

        const data: IPostViewAllResponse = await response.json();

        return data;
    } catch (e) {
        const data: IPostViewAllResponse = {
            result: false,
            msg: "데이터를 가져올 수 없음",
            posts: []
        };

        return data;
    }
}

export {FetchPostViewAll};
export type {IPostViewAllResponse};