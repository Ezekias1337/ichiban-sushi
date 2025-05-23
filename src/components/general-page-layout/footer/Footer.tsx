// Library Imports
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// Components
import { FooterLink } from "./dependents/FooterLink";
import { FooterSocialIcon } from "./dependents/FooterSocialIcon";
// CSS
import "./footer.scss";
// Assets and Images
import logo from "../../../assets/logo/logo.webp";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-and-social-row display-flex align-items-center">
        <div className="footer-logo-col">
          <Link to="/">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Link>
        </div>

        <div className="social-col display-flex">
          <FooterSocialIcon icon={faInstagram} url="https://www.instagram.com/ichiban_sushi_all_you_can_eat/" />
          <FooterSocialIcon icon={faFacebook} url="" />
          <FooterSocialIcon icon={faXTwitter} url="" />
        </div>
      </div>
      <div className="footer-navigation display-flex justify-content-space-around">
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">
            Contact
          </h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="(864) 655-7779"
              url="tel:+18646557779"
              openInNewTab={false}
            />
            <FooterLink
              linkText="Email"
              url="mailto: codedecodedbiz@gmail.com"
              openInNewTab={false}
            />
          </div>
        </div>
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">Info</h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="About Us"
              url="/about-us"
              openInNewTab={false}
            />
            <FooterLink linkText="All You Can Eat Policy" url="/all-you-can-eat-policy" openInNewTab={false} />
          </div>
        </div>

      </div>
      <div className="footer-copywrite-disclaimer-wrapper align-items-center display-flex justify-content-space-between">
        <div className="copywrite-container display-flex">
          <a href="https://weblordshub.com/" target="_blank">
            <img
              src="https://weblordshub.com/assets/logo-5CMEOra5.png"
              style={{ width: "50px" }}
            />
          </a>
          <small className="copywrite-disclaimer">
            © 2025 by WebLord LLC | Created by Code Decoded
          </small>
        </div>

        <div className="footer-bottom-navigation-wrapper display-flex justify-content-right">
          {/*  <div>
            <FooterLink linkText="Admin" url="/login" openInNewTab={false} />
          </div> */}
          <div>
            <FooterLink
              linkText="Terms of Service"
              url="/terms-of-service"
              openInNewTab={false}
            />
          </div>
          <div>
            <FooterLink
              linkText="Privacy Policy"
              url="/privacy-policy"
              openInNewTab={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
