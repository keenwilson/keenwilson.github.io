import React from "react";

const HarryPotterRPG = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Harry Potter RPG</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/C0L5qbt.png"
              alt="Harry Potter RPG"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A fully functional browser-based role playing game that involved
              interface design, state management -- keeping track of winning and
              losing stats, determining win paths, and fun!
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Bootstrap</div>
                <div className="tag is-success">jQuery</div>
                <div className="tag is-dark">Scope</div>
                <div className="tag is-dark">DOM Manipulation</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/unit-4-game"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://keenwilson.github.io/unit-4-game/"
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

export default HarryPotterRPG;
