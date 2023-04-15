import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostItem, { PostType } from "../post/PostItem";
import CommentList from "../comment/CommentList";
import { CommentType } from "../comment/Comment";
import styled from "styled-components";
import CommentWrite from "../comment/CommentWrite";
import {
  FetchPostViewEach,
  PostViewEachResponse,
} from "../post/api/PostViewAPI";
import { CommentsResponse, RequestGetComments } from "../comment/api/Comment";

type ParamType = {
  id: string;
};

const Wrapper = styled.div`
  width: calc(100%);
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 450px;
`;

/*
    1. 포스트를 가져옴
    2. 댓글을 가져옴
    3. 포스트와 댓글을 보여줌
 */
const PostViewEachPage = () => {
  const [post, setPost] = useState<PostType>({
    id: -1,
    writer: "",
    body: "",
    title: "",
    createdAt: "",
  });

  const [comments, setComments] = useState<CommentType[]>([]);
  const { id } = useParams<ParamType>();

  // 1. 포스트를 가져옴
  useEffect(() => {
    const fetchPost = async () => {
      const response: PostViewEachResponse = await FetchPostViewEach(
        parseInt(id!)
      );
      if (response.post) {
        setPost(response.post);
      }
    };

    fetchPost();
  }, []);

  // 2. 댓글을 가져옴
  useEffect(() => {
    const fetchComments = async () => {
      console.log("called");
      const response: CommentsResponse = await RequestGetComments(
        parseInt(id!)
      );
      if (response.comments) {
        setComments(response.comments);
      }
    };

    fetchComments();
  }, []);

  return (
    <Wrapper>
      <Container>
        <PostItem {...post} />
        <CommentList comments={comments} />
        <CommentWrite postId={Number(id)}></CommentWrite>
      </Container>
    </Wrapper>
  );
};

export default PostViewEachPage;
