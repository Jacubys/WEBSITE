import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { StarsCanvas } from "../canvas";
import { SectionWrapper } from "../../HighOrderComponents"
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [ waititng, setWaiting ] = useState(false);

    const [form, setForm] = useState({
        email: "",
      });
    
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setWaiting(true);
    }

    const handleLabelPosition = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
    };

    const handleCAPTCHAChange = () => {
        
    }

    const handleEmail = (e) => {
        if (!/[a-zA-Z0-9-@._]/.test(e.key)) e.preventDefault();
    };

    const getLabelStyle = (inputName) => (
        form[inputName] ? { top: "-23%" } : {}
    )

    return (
        <div id="forgotPasswordHolder">
            <div id="forgotPasswordShape">
                <p id="headSubtext">forgot your password?</p>
                <h1 id="headTitle">Reset Password</h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    method="POST"
                    autoComplete="on"
                    id="form"
                >

            <span className="userInput" id="holderUsername">
              <input
                name="email"
                type="email"
                id="email"
                minLength="5"
                maxLength="50"
                autoComplete="email"
                value={form.email}
                onKeyDown={(e) => handleEmail(e)}
                onChange={handleLabelPosition}
                readOnly={waititng ? true : false}
                required
              />
              <label htmlFor="email" style={getLabelStyle('email')}>E-mail</label>
              <div className="underline"></div>
            </span>     
            <div id="CAPTCHA"><ReCAPTCHA sitekey="6LdMYgkpAAAAANonYGpyw0RBvdOq039lUziKo2Lp" onChange={handleCAPTCHAChange} required/></div>
            <button type="submit" className="button" id="forgotPasswordButton" style={waititng ? {pointerEvents: "none"} : {pointerEvents: "all"}}>{waititng ? 'Sending Request' : 'Send Request'}</button>
                </form>
            </div>
            <StarsCanvas />
        </div>
    )
}

export default SectionWrapper(ForgotPassword, "forgotpassword")