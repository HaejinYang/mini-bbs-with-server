import React, {useState} from "react";
import {CenteredSpan, Container, FocusSpan, FormContainer} from "./styled";

interface SignUpProps {
    onFormSwitch(name: string): void;

    onClose(): void;
}

const SignUp: React.FC<SignUpProps> = (props) => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [passwordFirst, setPasswordFirst] = useState('');
    const [passwordSecond, setPasswordSecond] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

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
            <FormContainer onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input id="email" name="email" placeholder="example@gmail.com" type="text" value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="nickname">이름</label>
                <input id="nickname" name="nickname" placeholder="baby" type="text" value={nickname}
                       onChange={e => setNickname(e.target.value)}/>
                <label htmlFor="password-first">비밀번호</label>
                <input id="password-first" name="password-first" placeholder="********" type="password"
                       value={passwordFirst}
                       onChange={e => setPasswordFirst(e.target.value)}/>
                <label htmlFor="password-second">비밀번호확인</label>
                <input id="password-second" name="password-second" placeholder="********" type="password"
                       value={passwordSecond}
                       onChange={e => setPasswordSecond(e.target.value)}/>
                <input type="submit" value="가입"/>
                <CenteredSpan>또는</CenteredSpan>
                <button onClick={e => props.onFormSwitch("sign-in")}>로그인</button>
            </FormContainer>
        </Container>
    )
};

export default SignUp;