import React from "react";

const ChristmasList = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>
              <i className="far fa-star" /> Christmas List
            </span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/vOsrlmA.png"
              alt="Christmas List"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A Vue.js/Express.js web application for creating a Christmas list
              by searching items from product catalog and save those items to a
              list on MySQL Database. The user can <strong>register</strong>{" "}
              their username, email address, and password following the
              validation rules. If the account is created, the user can log in
              to their Christmas list,
              <strong>search</strong> for items they want to include in their
              list using the search panel. The user can <strong>add</strong> or{" "}
              <strong>remove</strong> the item from their saved items list.
              <br />
              <br />
              This app also have User Authentication for registration and login
              powered by <code>Passport</code>,{" "}
              <code>JSON Web Tokens (JWTs)</code> and <code>Bcrypt-nodejs</code>
              .
              <br />
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Material Design</div>
                <div className="tag is-info">Vue Js</div>
                <div className="tag is-info">Vuex</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-warning">Express Js</div>
                <div className="tag is-link">SQL</div>
                <div className="tag is-link">MySQL2</div>
                <div className="tag is-link">Sequelize</div>
                <div className="tag is-danger">Cors</div>
                <div className="tag is-danger">Passport</div>
                <div className="tag is-danger">JSON Web Tokens</div>
                <div className="tag is-danger">Bcrypt-nodejs</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/ChristmasList-Vue-Express-Passport"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://tbl-christmas-wishlist.herokuapp.com/"
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

export default ChristmasList;
