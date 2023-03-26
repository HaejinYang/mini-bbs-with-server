import {FC} from "react";
import {PostCardProps} from "../post/PostCard";
import styled from "styled-components";

interface PostType extends PostCardProps{
    body: string;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`
const PostStyle = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid #999;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`
const PostItem: FC<PostType> = (props) => {
    return (
        <Wrapper>
            <PostStyle>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </PostStyle>
        </Wrapper>
    )
}

export default PostItem;
export  type {PostType};