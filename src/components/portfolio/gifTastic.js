import React from "react";

const GifTastic = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Movies GIF-Tastic</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/MFXn2D1.png"
              alt="Movies GIF-Tastic"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A browser-based app shows the user GIPHY and OMDb results based on
              their search term and make a dynamic web page that popultes with
              gifs and snippets of information about the movie of their choice
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Bootstrap</div>
                <div className="tag is-success">jQuery</div>
                <div className="tag is-success">AJAX/API</div>
                <div className="tag is-link">NoSQL</div>
                <div className="tag is-link">Firebase</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/giftastic"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://keenwilson.github.io/giftastic/"
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

export default GifTastic;
