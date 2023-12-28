import { useState, useEffect, useRef } from "react";
import { StarsCanvas } from "../canvas";
import { eye, crossed_eye } from "../../assets";
import { SectionWrapper } from "../../HighOrderComponents"
import "./SignUp.css";

const SignUp = () => {
    const [ icon, setIcon ] = useState('hidden');
    const [ showPassword, setShowPassword ] = useState(false);
    const [ waititng, setWaiting ] = useState(false);
    const activeIcon = 'hidden';

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
      });
    
    const formRef = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      setWaiting(true)
    }

    useEffect(() => {
        if (activeIcon === 'hidden') setIcon('hidden');
        else setIcon('visible');
      }, [activeIcon]);

    const toggleIcon = () => {
        setIcon(icon === 'hidden' ? 'visible' : 'hidden')
    };

    const togglePasswordVisibility = () => {
        setShowPassword((ShowPassword) => !ShowPassword);
    };

    const handleUser = (e) => {
        if (!/[a-zA-Z]/.test(e.key)) e.preventDefault();
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
      );

      const getPasswordStyle = (inputName) => (
        form[inputName] ? { top: "-18%" } : {}
      );

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

      const mediaQuery = window.matchMedia("(max-width: 700px)");
  
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

    const getLabelStyleMobile = (inputName) => (
      form[inputName] ? { top: "-21.5%", color: "#FF6666" } : {}
    );

    const getPasswordStyleMobile = (inputName) => (
      form[inputName] ? { top: "-13%", color: "#FF6666" } : {}
    );


    return (
        <div id="signInHolder">
            <div id="signInShape">
                <p id="headSubtext">LET&apos;S BEGIN</p>
                <h1 id="headTitle">Sign up</h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    method="POST"
                    autoComplete="on"
                    id="form"
                >
            <div id="accountBox">
            <span className="userInput" id="holderAccName">
              <input
                name="name"
                type="text"
                id="name"
                minLength="3"
                maxLength="35"
                autoComplete="given-name"
                value={form.name}
                onKeyDown={(e) => handleUser(e)}
                onChange={handleLabelPosition}
                readOnly={waititng ? true : false}
                required
              />
              <label htmlFor="name" style={isMobile ? getLabelStyleMobile('name') : getLabelStyle('name')}>Name</label>
              <div className="underline"></div>
            </span>

            <span className="userInput" id="holderAccSurname">
              <input
                name="surname"
                type="text"
                id="surname"
                minLength="3"
                maxLength="35"
                autoComplete="family-name"
                value={form.surname}
                onKeyDown={(e) => handleUser(e)}
                onChange={handleLabelPosition}
                readOnly={waititng ? true : false}
                required
              />
              <label htmlFor="surname" style={isMobile ? getLabelStyleMobile('surname') : getLabelStyle('surname')}>Surname</label>
              <div className="underline"></div>
            </span>
            </div>

            <span className="userInput" id="holderAccUsername">
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
              <label htmlFor="email" style={isMobile ? getLabelStyleMobile('email') : getLabelStyle('email')}>E-mail</label>
              <div className="underline"></div>
            </span>

            <span className="userInput" id="holderAccPassword">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                minLength="5"
                maxLength="50"
                autoComplete="new-password"
                value={form.password}
                onKeyDown={(e) => handlePassword(e)}
                onChange={handleLabelPosition}
                readOnly={waititng ? true : false}
                required
              />
              <label htmlFor="password" style={isMobile ? getPasswordStyleMobile('password') : getPasswordStyle('password')}>Password</label>
              <div className="underline"></div>
              <div id="seePassword"><img onClick={() => { toggleIcon(); togglePasswordVisibility(); }} src={icon === 'hidden' ? eye : crossed_eye} alt={icon === 'hidden' ? 'eye' : 'crossed_eye'} /></div>
              <div id="TaC"><input type="checkbox" required/>&nbsp;I have read and agree to the&nbsp;<a href="terms-of-service">terms of service</a></div>
            </span>
              <button type="submit" className="button" id="createAccountButton" style={waititng ? {pointerEvents: "none"} : {pointerEvents: "all"}}>{waititng ? 'Signing up' : 'Sign up'}</button>
              <div id="noAccount"><p>Already have an account?&nbsp;<a href="signin">Sign in</a>&nbsp;now!</p></div>
            </form>
            </div>
            <StarsCanvas />
        </div>
    )
}

export default SectionWrapper(SignUp, "signup")