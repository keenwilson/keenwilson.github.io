import React from "react";

const DogTrivia = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Dog Trivia Game</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/TZlqs07.png"
              alt="Dog Trivia Game"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A dog-themed trivia game shows only one question until the player
              answers it or their time runs out
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTM/CSSL</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Bootstrap</div>
                <div className="tag is-success">jQuery</div>
                <div className="tag is-dark">JavaScript Timing Events</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/TriviaGame"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://keenwilson.github.io/TriviaGame/"
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

export default DogTrivia;
