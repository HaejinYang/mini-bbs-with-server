import NavItem from "./NavItem";
import styled from "styled-components";
import { useState } from "react";
import Sign from "../sign/Sign";

const Container = styled.nav`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 16px;
`;

const Button = styled.button`
  font-size: inherit;
  color: white;
  background-color: rgb(230, 0, 35);
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const Span = styled.span`
  color: rgb(230, 0, 35);
  font-weight: bold;

  span {
    display: inline-block;
    background-color: rgb(230, 0, 35);
    color: white;
    padding: 5px;
    border-radius: 10px;
  }
`;

const NavBar = () => {
  const [isSign, setSign] = useState(false);

  return (
    <Container>
      <span style={{ flexGrow: 1 }}>
        <NavItem linkPath="/">
          {" "}
          <Span>
            <Span>MINI</Span> 미니게시판
          </Span>
        </NavItem>
      </span>
      <NavItem linkPath="/post/all">글목록보기</NavItem>
      <NavItem linkPath="/post/write">글쓰기</NavItem>
      <Button
        onClick={() => {
          setSign(true);
        }}
      >
        로그인
      </Button>
      {isSign && (
        <Sign
          onClose={() => {
            setSign(false);
          }}
        />
      )}
    </Container>
  );
};

export default NavBar;
