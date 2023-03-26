import styled from "styled-components";
import {FC, MouseEvent, useState, ChangeEvent} from "react";
import { CommentType } from "./Comment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
`;

const TextArea = styled.textarea`
  padding: 4px;
  width: 100%;
  margin-bottom: 6px;
  border-radius: 5px;
`

const Button = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: rgb(0 0 0 / 0.05);
  }
`

interface CommentWriteProps {
    postId: number;
}

const CommentWrite: FC<CommentWriteProps> = (props) => {
    const [comment, setComment] = useState("");
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {

        // new comment write
        setComment("");
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    }

    return (
        <Container>
            <TextArea placeholder="댓글" value={comment} onChange={onChange}></TextArea>
            <Button onClick={onClick}>등록</Button>
        </Container>
    )
}

export default CommentWrite