import React from "react";

const LiriNode = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>LIRI Node Application</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/7wyATKm.gif"
              alt="LIRI Node Application"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              An interactive Node-based command-line (CLI) application that will
              search Spotify for songs, Bands in Town for concerts, and OMDB for
              movies
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-dark">RESTful API</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/liri-node-app"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default LiriNode;
