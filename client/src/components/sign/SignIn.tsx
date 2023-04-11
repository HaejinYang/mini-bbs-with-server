import React, {useState} from "react";
import {Container, FormContainer} from "./styled";

interface SignInProps {
    onFormSwitch(name: string): void;
}

const SignIn: React.FC<SignInProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <FormContainer>
                <label htmlFor="email">email</label>
                <input id="email" name="email" placeholder="example@gmail.com" type="text" value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password-first">비밀번호</label>
                <input id="password" name="password" placeholder="********" type="password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <input type="submit" value="로그인"/>
                <button onClick={e => props.onFormSwitch("sign-up")}>아이디가 없으신가요?</button>
            </FormContainer>
        </Container>
    )
}

export default SignIn;