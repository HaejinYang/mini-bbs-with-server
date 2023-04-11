import React, {useState} from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";


const Sign: React.FC = () => {
    const [form, setForm] = useState('sign-in');

    const switchForm = (name: string) => {
        setForm(name);
    }

    return (
        <>
            {
                form === "sign-in" ? <SignIn onFormSwitch={switchForm} /> : <SignUp onFormSwitch={switchForm}/>
            }
        </>
    );
}

export default Sign;