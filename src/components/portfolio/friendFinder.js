import React from "react";

const FriendFinder = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Playdate Friend Finder</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/hQqTdUP.png"
              alt="Playdate Friend Finder"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A full-stack compatibility-based Playdate Friend Finder
              application, basically a dating app for mommy friends, that
              utilized a basic survey, implemented <code>Express</code>
              to handle routing that makes that data and logic accessible, and
              deployed to <code>Heroku</code>
              so other users can use it
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Bootstrap</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-warning">Express</div>
                <div className="tag is-danger">RegEx</div>
                <div className="tag is-dark">Responsive Web Design</div>
                <div className="tag is-dark">Restful API</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/FriendFinder-Survey-Node-Express"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://guarded-fortress-95261.herokuapp.com/"
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

export default FriendFinder;
