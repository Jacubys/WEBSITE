import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { navLinks, account } from "../../constants";
import { logo, logo_logo } from '../../assets';
import "./Navbar.css";
//import { styles } from "../../styles";

const Navbar = () => {
  const setActive = useState('');
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

  return (
    <nav>
      <div id="navigation"
      className={toggle ? "active_navigation" : "navigation"}>
          <div id="logo-menu_holder">
          <Link id="logo-menu_holder"
            onClick={() => {
            window.scrollTo(0,0);}}>
            <img src={isMobile ? logo_logo : logo} alt="logo" id="logo"/>
          </Link>
        <div 
        className={toggle ? "ham_menu_active" : "ham_menu_icon"}       
        onClick={() => setToggle(!toggle)
        }
        >
            <span id="ham_menu_part"></span>
        </div>
        </div>
        <ul className="navigation_menu" id="menu_part">
          {navLinks.map((link) => ( 
            <li key={link.id}
                className={`${location.pathname === "/" + `${link.url}` ? "active_link" : ""}`}
                onClick={() => {
                setActive(link.title);
                }}
            >
              <a href={`${link.url}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <ul className="navigation_menu" id="account_part">
          {account.map((link) => (
            <li id="scale" key={link.id}
                className={`${location.pathname === "/" + `${link.url}` ? "active_link" : ""}`}
                onClick={() => {
                setActive(link.title);
                }}
            >
              <a href={`${link.url}`} className="navigation_button">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

