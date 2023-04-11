import React, {useState} from "react";
import {Container, FormContainer} from "./styled";

interface SignUpProps {
    onFormSwitch(name: string): void;
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
            <FormContainer onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input id="email" name="email" placeholder="example@gmail.com" type="text" value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="nickname">이름</label>
                <input id="nickname" name="nickname" placeholder="baby" type="text" value={nickname}
                       onChange={e => setNickname(e.target.value)}/>
                <label htmlFor="password-first">비밀번호</label>
                <input id="password-first" name="password-first" placeholder="********" type="password" value={passwordFirst}
                       onChange={e => setPasswordFirst(e.target.value)}/>
                <label htmlFor="password-second">비밀번호확인</label>
                <input id="password-second" name="password-second" placeholder="********" type="password" value={passwordSecond}
                       onChange={e => setPasswordSecond(e.target.value)}/>
                <input type="submit" value="가입"/>
                <button onClick={e => props.onFormSwitch("sign-in")}>아이디가 있으신가요?</button>
            </FormContainer>
        </Container>
    )
};

export default SignUp;