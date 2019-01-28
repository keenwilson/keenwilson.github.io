import React from "react";

const ConstructorWord = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Constructor Word Guess</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/oyBgX8Q.gif"
              alt="Constructor Word Guess"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A command-line (CLI) word guess game using constructor functions
              to create objects representing each word to guess as well as each
              letter in each word, and using the inquirer package to prompt the
              user to guess a letter
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-danger">inquirer</div>
                <div className="tag is-danger">RegEx</div>
                <div className="tag is-dark">Object Constructors</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/Constructor-Word-Guess"
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

export default ConstructorWord;
