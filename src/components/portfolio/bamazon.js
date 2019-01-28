import React from "react";

const Bamazon = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>Bamazon Amazon Storefront Meme</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/QK0IE24.gif"
              alt="Bamazon Amazon-Meme"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              An Amazon-like storefront node app taking in orders from customers
              and deplete stock from the store's inventory and allowing managers
              to view low inventory and add new product to the SQL database
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-danger">inquirer</div>
                <div className="tag is-danger">RegEx</div>
                <div className="tag is-link">SQL</div>
                <div className="tag is-link">MySQL</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/bamazon"
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

export default Bamazon;
