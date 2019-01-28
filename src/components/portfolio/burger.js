import React from "react";

const Burger = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Eat the Burger!</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/ZAMrbw4.png"
              alt="Eat the Burger"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A burger logger utilizes <code>MySQL</code>, <code>Express</code>,
              and <code>Handlebars</code> to allow users to create, update, and
              read burgers from the database.
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-info">Handlebars</div>
                <div className="tag is-success">Bootstrap</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-warning">Express</div>
                <div className="tag is-link">MySQL</div>
                <div className="tag is-link">
                  Object-relational Mapping (ORM)
                </div>
                <div className="tag is-dark">MVC Framework</div>
                <div className="tag is-dark">Restful API</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/BurgerLogger-Node-Express-Handlebars"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://fierce-island-73401.herokuapp.com"
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

export default Burger;
