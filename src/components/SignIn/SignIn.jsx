import { useState, useEffect, useRef } from "react";
import { StarsCanvas } from "../canvas";
import { eye, crossed_eye } from "../../assets";
import { SectionWrapper } from "../../HighOrderComponents"
import "./SignIn.css";

const SignIn = () => {
    const [ icon, setIcon ] = useState('hidden');
    const [ showPassword, setShowPassword ] = useState(false);
    const [ waititng, setWaiting ] = useState(false);
    const activeIcon = 'hidden';

    const [form, setForm] = useState({
        email: "",
        password: "",
      });
    
    const formRef = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      setWaiting(true);
    }

    useEffect(() => {
        if (activeIcon === 'hidden') setIcon('hidden');
        else setIcon('visible');
      }, [activeIcon]);

    const toggleIcon = () => {
        setIcon(icon === 'hidden' ? 'visible' : 'hidden')
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleEmail = (e) => {
        if (!/[a-zA-Z0-9-@._]/.test(e.key)) e.preventDefault();
       };

    const handlePassword = (e) => {
        if (!/[a-zA-Z0-9-@!#$%&._]/.test(e.key)) e.preventDefault();
    };

    const handleLabelPosition = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      const getLabelStyle = (inputName) => (
        form[inputName] ? { top: "-23%" } : {}
      )

      const getPasswordStyle = (inputName) => (
        form[inputName] ? { top: "-18%" } : {}
      )


    return (
        <div id="signInHolder">
            <div id="signInShape">
                <p id="headSubtext">WELCOME BACK</p>
                <h1 id="headTitle">Sign in</h1>

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

            <span className="userInput" id="holderPassword">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                minLength="5"
                maxLength="50"
                autoComplete="current-password"
                value={form.password}
                onKeyDown={(e) => handlePassword(e)}
                onChange={handleLabelPosition}
                readOnly={waititng ? true : false}
                required
              />
              <label htmlFor="password" style={getPasswordStyle('password')}>Password</label>
              <div className="underline"></div>
              <div id="seePassword"><img onClick={() => { toggleIcon(); togglePasswordVisibility(); }} src={icon === 'hidden' ? eye : crossed_eye} alt={icon === 'hidden' ? 'eye' : 'crossed_eye'} /></div>
              <div id="forgotPassword"><a href="password_reset">Forgot Password?</a></div>
            </span>
              <button type="submit" className="button" id="accountButton" style={waititng ? {pointerEvents: "none"} : {pointerEvents: "all"}}>{waititng ? 'Signing in' : 'Sign in'}</button>
              <div id="noAccount"><p>Don&apos;t have account?&nbsp;<a href="signup">Sign up</a>&nbsp;now!</p></div>
            </form>
            </div>
            <StarsCanvas />
        </div>
    )
}

export default SectionWrapper(SignIn, "signin")