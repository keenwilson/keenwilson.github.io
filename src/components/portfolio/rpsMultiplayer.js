import React from "react";

const RpsMultiplayer = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Rock-Paper-Scissors Multiplayer</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/gG14z3p.png"
              alt="Rock-Paper-Scissors Multiplayer"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              An online two-player Rock-Paper-Scissors game with the help of
              Firebase to store and sync data between users and devices in
              realtime using a cloud-hosted, NoSQL database
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Bulma</div>
                <div className="tag is-success">jQuery</div>
                <div className="tag is-link">NoSQL</div>
                <div className="tag is-link">Firebase</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/RPS-Multiplayer"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://keenwilson.github.io/RPS-Multiplayer/"
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

export default RpsMultiplayer;
