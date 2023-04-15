import React, {useState} from "react";
import {CenteredSpan, Container, CursorSpan, FocusSpan, FormContainer, InvalidFormItemSpan} from "./styled";
import {useNavigate} from "react-router-dom";
import {ValidateEmail, ValidatePassword} from "../common/util/util";
import styled from "styled-components";

interface SignInProps {
    onFormSwitch(name: string): void;
    onClose(): void;
}

const SignIn: React.FC<SignInProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setEmailValid] = useState(true);
    const [isPasswordValid, setPasswordValid] = useState(true);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isInvalid = false;
        if(!ValidateEmail(email)) {
            setEmailValid(false);
            isInvalid = true;
        }

        if(ValidatePassword(password)) {
            setPasswordValid(false);
            isInvalid = true;
        }

        if(!isInvalid) {
            setEmailValid(true);
            setPasswordValid(true);
        }
    };

    return (
        <Container>
            <button onClick={() => {
                props.onClose();
            }}>❌</button>
            <FocusSpan>
                미니 게시판에 오신 것을<br/>
                환영합니다
            </FocusSpan>
            <FormContainer onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input id="email" name="email" placeholder="example@gmail.com" type="text" value={email}
                       onChange={e => setEmail(e.target.value)}/>
                {isEmailValid || <InvalidFormItemSpan>❌ 이메일을 확인해주세요</InvalidFormItemSpan>}
                <label htmlFor="password-first">비밀번호</label>
                <input id="password" name="password" placeholder="********" type="password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                {isPasswordValid || <InvalidFormItemSpan>❌ 비밀번호를 확인해주세요</InvalidFormItemSpan>}

                <CursorSpan>비밀번호를 잊으셨나요?</CursorSpan>
                <input type="submit" value="로그인"/>
                <CenteredSpan>또는</CenteredSpan>
                <button onClick={e => props.onFormSwitch("sign-up")}>가입</button>
            </FormContainer>
        </Container>
    )
}


export default SignIn;