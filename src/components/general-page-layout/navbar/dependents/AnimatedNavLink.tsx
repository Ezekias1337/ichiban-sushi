// Library Imports
import React from "react";
import { Link } from "@tanstack/react-router";

type AnimatedNavLinkProps = {
  linkText: string;
  url: string;
};

const AnimatedNavLink: React.FC<AnimatedNavLinkProps> = ({
  linkText,
  url,
}) => {
  return (
    <div className="nav-link-wrapper">
      <Link to={url} className="nav-link">
        {linkText}
      </Link>
      <div className="nav-link-underline"></div>
    </div>
  );
};

export default AnimatedNavLink;