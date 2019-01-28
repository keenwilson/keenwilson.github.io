import React from "react";
import ContactForm from "./contactForm";

const Footer = () => {
  return (
    <footer id="site-footer" className="footer">
      <div className="content has-text-centered has-background-cream">
        <ContactForm />
        <h1 className="subtitle has-text-weight-light has-text-centered">
          Keep in touch
        </h1>
        <h1 className="subtitle">
          <a
            className="footer-link cIcons hvr-grow"
            href="https://www.google.com/search?q=kansas+city"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-map-marker-alt" />
            <span className="subtitle is-6 has-text-weight-light has-text-centered hvr-grow">
              Kansas City
            </span>
          </a>
          <a
            className="footer-link cIcons hvr-grow"
            href="https://github.com/keenwilson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            <br />
            <span className="subtitle is-6 has-text-weight-light has-text-centered hvr-grow">
              Github
            </span>
          </a>
          <a
            className="footer-link cIcons hvr-grow"
            href="https://www.linkedin.com/in/keen-wilson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
            <span className="subtitle is-6 has-text-weight-light has-text-centered hvr-grow">
              linkedin
            </span>
          </a>
          <a
            className="footer-link cIcons hvr-grow"
            href="https://twitter.com/keencwilson?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
            <span className="subtitle is-6 has-text-weight-light has-text-centered hvr-grow">
              Twitter
            </span>
          </a>
          <a
            className="footer-link cIcons hvr-grow"
            href="https://medium.com/@keencwilson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-medium-m" />
            <br />
            <span className="subtitle is-6 has-text-weight-light has-text-centered hvr-grow">
              Blog
            </span>
          </a>
          <a
            className="footer-link cIcons hvr-grow"
            href="mailto:keencwilson@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-envelope" />
            <br />
            <span className="subtitle is-6 has-text-weight-light has-text-centered hvr-grow">
              Email
            </span>
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
