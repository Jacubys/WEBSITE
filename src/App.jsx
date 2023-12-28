import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Default, Home, About, Contact, SignUp, SignIn, ForgotPassword, TermsOfService } from "./components";
import "../styles.css"

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const hideNavbarOnPages = ["/password_reset", "/terms-of-service", ""];
  
    const currentPage = window.location.pathname;

    const handlePageLoading = () => {
      document.body.classList.add("loading");
      setTimeout(() => {
        document.body.classList.remove("loading");
      }, 500);
    };

    hideNavbarOnPages.includes(currentPage) ? setShowNavbar(false) : setShowNavbar(true);

    setIsLoading(false)
    
    window.addEventListener("beforeunload", handlePageLoading);
    
    return () => {
      window.removeEventListener("beforeunload", handlePageLoading);
    };
    }, []);

  return (
    <BrowserRouter>
    {!isLoading && showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Default />}/>
        <Route path="Home" element={<Home />}/>
        <Route path="About" element={<About />}/>
        <Route path="Contact" element={<Contact />}/>
        <Route path="signin" element={<SignIn />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="password_reset" element={<ForgotPassword />}/>
        <Route path="terms-of-service" element={<TermsOfService />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App