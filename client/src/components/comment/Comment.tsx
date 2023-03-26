import {FC} from "react";
import styled from "styled-components";

interface CommentType {
    postId: number;
    commentId: number;
    body: string;
    writer?: string;
    createdAt?: Date;
}

const PStyle = styled.p`
  border-radius: 5px;
  border: 1px solid #999;
  width: 100%;
  padding: 16px;
`

const Comment: FC<CommentType> = (prop) => {
    return (
        <div>
            <PStyle>{prop.body}</PStyle>
        </div>
    )
}

export default Comment;
export type {CommentType};