import React, { useState } from "react";
import {
  CenteredSpan,
  Container,
  FocusSpan,
  FormContainer,
  InvalidFormItemSpan,
} from "./styled";
import {
  ValidateEmail,
  ValidateNickname,
  ValidatePassword,
} from "../common/util/util";

interface SignUpProps {
  onFormSwitch(name: string): void;

  onClose(): void;
}

const SignUp: React.FC<SignUpProps> = (props) => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordFirst, setPasswordFirst] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);
  const [isNicknameValid, setNicknameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid = true;

    if (!ValidateEmail(email)) {
      setEmailValid(false);
      isValid = false;
    } else {
      setEmailValid(true);
    }

    if (!ValidateNickname(nickname)) {
      setNicknameValid(false);
      isValid = false;
    } else {
      setNicknameValid(true);
    }

    if (passwordFirst !== passwordSecond || !ValidatePassword(passwordFirst)) {
      setPasswordValid(false);
      isValid = false;
    } else {
      setPasswordValid(true);
    }

    if (isValid) {
      setEmailValid(true);
      setNicknameValid(true);
      setPasswordValid(true);
    }
  };

  return (
    <Container>
      <button
        onClick={() => {
          props.onClose();
        }}
      >
        ❌
      </button>
      <FocusSpan>
        미니 게시판에 오신 것을
        <br />
        환영합니다
      </FocusSpan>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          placeholder="example@gmail.com"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isEmailValid || (
          <InvalidFormItemSpan>❌ 이메일을 확인해주세요</InvalidFormItemSpan>
        )}
        <label htmlFor="nickname">이름</label>
        <input
          id="nickname"
          name="nickname"
          placeholder="baby"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {isNicknameValid || (
          <InvalidFormItemSpan>❌ 이름을 확인해주세요</InvalidFormItemSpan>
        )}
        <label htmlFor="password-first">비밀번호</label>
        <input
          id="password-first"
          name="password-first"
          placeholder="********"
          type="password"
          value={passwordFirst}
          onChange={(e) => setPasswordFirst(e.target.value)}
        />
        {isPasswordValid || (
          <InvalidFormItemSpan>❌ 비밀번호를 확인해주세요</InvalidFormItemSpan>
        )}
        <label htmlFor="password-second">비밀번호확인</label>
        <input
          id="password-second"
          name="password-second"
          placeholder="********"
          type="password"
          value={passwordSecond}
          onChange={(e) => setPasswordSecond(e.target.value)}
        />
        {isPasswordValid || (
          <InvalidFormItemSpan>❌ 비밀번호를 확인해주세요</InvalidFormItemSpan>
        )}
        <input type="submit" value="가입" />
        <CenteredSpan>또는</CenteredSpan>
        <button onClick={(e) => props.onFormSwitch("sign-in")}>로그인</button>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
