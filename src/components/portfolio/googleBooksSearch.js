import React from "react";

const GoogleBooksSearch = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>
              <i className="far fa-star" /> Google Books Search
            </span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/XnJ9xOU.png"
              alt="Google Books Search"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A <code>Node/Express/MongoDB</code> web application utilizes React
              and <code>Google Books API</code> to let the user search and save
              books. This product is a SPA (Single Page Application) that uses{" "}
              <code>react-router-dom</code> to navigate, hide and show your
              React components without changing the route within{" "}
              <code>Express</code> .
              <br />
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Bootstrap</div>
                <div className="tag is-info">React</div>
                <div className="tag is-info">React-Router-DOM</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-warning">Express Js</div>
                <div className="tag is-link">MongoDB</div>
                <div className="tag is-link">Mongoose</div>
                <div className="tag is-danger">Axios</div>
                <div className="tag is-dark">HTTP Services</div>
                <div className="tag is-dark">RESTful API</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/react-google-books"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://react-googlebooks.herokuapp.com//"
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

export default GoogleBooksSearch;
