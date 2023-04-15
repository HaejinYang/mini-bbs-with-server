import React, {useState} from "react";
import {CenteredSpan, Container, CursorSpan, FocusSpan, FormContainer} from "./styled";
import {useNavigate} from "react-router-dom";

interface SignInProps {
    onFormSwitch(name: string): void;
    onClose(): void;
}

const SignIn: React.FC<SignInProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();
    return (
        <Container>
            <button onClick={() => {
                props.onClose();
            }
            }>X</button>
            <FocusSpan>
                미니 게시판에 오신 것을<br/>
                환영합니다
            </FocusSpan>
            <FormContainer>
                <label htmlFor="email">email</label>
                <input id="email" name="email" placeholder="example@gmail.com" type="text" value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password-first">비밀번호</label>
                <input id="password" name="password" placeholder="********" type="password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <CursorSpan>비밀번호를 잊으셨나요?</CursorSpan>
                <input type="submit" value="로그인"/>
                <CenteredSpan>또는</CenteredSpan>
                <button onClick={e => props.onFormSwitch("sign-up")}>가입</button>
            </FormContainer>
        </Container>
    )
}

export default SignIn;