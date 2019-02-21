import React from "react";

const ReactMaliThaiBistro = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Mali Thai Bistro</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/27hytyT.png"
              alt="Mali Thai Bistro"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              This Single Page Application (SPA) is "mobile-first" designed such
              as a collapsible navbar and a responsive menu section making this
              web <strong>searchable</strong> and{" "}
              <strong>easy-to-read on small screens</strong>. In order to meet
              the user's expectation when they check the restaurant's website,
              this web app integrates the restaurant's location from Google
              Maps, news and events update from Facebook page, and a floating
              'scroll to top' arrow-up button for easy navigation.
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Bootstrap</div>
                <div className="tag is-info">React</div>
                <div className="tag is-dark">Responsive Web Design</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/react-malithaibistro"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://malithaibistro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            Live Preview
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ReactMaliThaiBistro;
