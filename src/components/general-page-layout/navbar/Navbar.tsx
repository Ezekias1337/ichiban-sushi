// Library Imports
import React, { useState } from "react";
import { Link /* useLocation */ } from "@tanstack/react-router";
// Functions, Helpers, Utils, and Hooks
import useWindowWidth from "../../../hooks/useWindowWidth";
// Components
import AnimatedNavLink from "./dependents/AnimatedNavLink";
import NavDropdownMenu from "./dependents/NavDropdownMenu";
// CSS
import "./navbar.scss";
// Assets and Images
import logo from "../../../assets/logo/logo.webp";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();
  //const location = useLocation();

  //const listOfUrlsToUseGlassmorphicVariant = ["/", "/login"];
  const variant: string = "default";

  /* if (listOfUrlsToUseGlassmorphicVariant.includes(location.pathname)) {
    variant = "glassmorphic";
  } else {
    variant = "default";
  } */

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar ${variant}-navbar full-flex padding-left-80 padding-right-80 padding-top-40 padding-bottom-40`}
    >
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        {windowWidth <= 768 && (
          <button className="navbar-toggle" onClick={toggleMenu}>
            <span className="navbar-toggle-icon">&#9776;</span>
          </button>
        )}
      </div>
      <div
        className={`navbar-menu${isOpen ? " navbar-menu-open" : ""} z-index-2`}
      >
        <ul className="space-around-flex align-items-center">
          <li>
            <AnimatedNavLink linkText="Home" url="/" />
          </li>
          <li>
            <NavDropdownMenu
              linkText="Info"
              dropdownItems={[
                {
                  text: "About Us",
                  url: "/about-us",
                },
                {
                  text: "All You Can Eat Policy",
                  url: "/all-you-can-eat-policy",
                },
              ]}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
