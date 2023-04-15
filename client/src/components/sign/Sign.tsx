import React, {useState} from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import styled from "styled-components";

interface SignProps {
    onClose(): void;
}

const Layout = styled.div`
  background-color: rgb(0 0 0 / 0.6);
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  overflow: auto;
`;

const Sign: React.FC<SignProps> = (props) => {
    const [form, setForm] = useState('sign-in');

    const switchForm = (name: string) => {
        setForm(name);
    }

    return (
        <>
            <Layout>
                {
                    form === "sign-in" ? <SignIn onFormSwitch={switchForm} onClose={props.onClose}/> : <SignUp onFormSwitch={switchForm} onClose={props.onClose}/>
                }
            </Layout>
        </>
    );
}

export default Sign;