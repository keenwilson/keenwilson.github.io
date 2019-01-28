import React from "react";

const NytScraper = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>
              <i className="far fa-star" /> The New York Times Scraper
            </span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/xgxg2XN.png"
              alt="The New York Times Scraper"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A web app utilizes <code>mongoDB</code>, <code>Mongoose</code>,{" "}
              <code>cheerio</code>, and <code>express</code> to let the user
              view and leave comments on the latest news.
              <br />
              <br />
              Whenever a user visits the site, the user can use a scraping tool
              to scrape stories from a news outlet, which is The New York TImes
              in this app. The user can select which section of NYT that they
              want to review: U.S., Business, Technology, Travel, and Style.
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-info">Handlebars</div>
                <div className="tag is-warning">Node Js</div>
                <div className="tag is-warning">Express Js</div>
                <div className="tag is-link">MongoDB</div>

                <div className="tag is-link">Mongoose</div>
                <div className="tag is-danger">Axios</div>
                <div className="tag is-danger">Cheerio</div>
                <div className="tag is-dark">Responsive Web Design</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/NYT-Scraper-Node-Express-Mongoose"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="https://fast-caverns-15278.herokuapp.com/"
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

export default NytScraper;
