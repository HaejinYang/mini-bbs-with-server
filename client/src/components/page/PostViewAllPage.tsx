import PostCardListContainer from "../post/PostCardListContainer";
import PostCardList from "../post/PostCardList";
import React, {useEffect, useState} from "react";
import {FetchPostViewAll} from "./api/PostViewAPI";
import {PostType} from "../types";

const PostViewAllPage = () => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await FetchPostViewAll();
            setPosts(data.posts);
        }

        fetchData();
    }, []);

    return (
        <PostCardListContainer>
            <PostCardList posts={posts}/>
        </PostCardListContainer>
    );
}

export default PostViewAllPage;