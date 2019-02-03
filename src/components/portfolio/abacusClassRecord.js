import React from "react";

const AbacusClassRecord = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>
              <i className="far fa-star" /> Abacus Class Record
            </span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/VJSc88c.png"
              alt="Abacus Class Record"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              Abacus is the visual platform that gives teachers perspective on
              class attendances, assignments, and grades. Our product team aims
              to provide teachers with a way to clearly visualize their
              analytics and provide at-a-glance insights into what's going on in
              their classes.
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Materialize</div>
                <div className="tag is-info">React</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-warning">Express Js</div>
                <div className="tag is-link">NoSQL</div>
                <div className="tag is-link">MongoDB</div>
                <div className="tag is-link">Mongoose</div>
                <div className="tag is-danger">Joi</div>
                <div className="tag is-danger">JSON Web Tokens</div>
                <div className="tag is-danger">Bcrypt</div>
                <div className="tag is-dark">User Interfaces</div>
                <div className="tag is-dark">API services</div>
                <div className="tag is-dark">Database Modeling</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/Abacus-Class-Record"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://react-abacus.herokuapp.com/"
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

export default AbacusClassRecord;
