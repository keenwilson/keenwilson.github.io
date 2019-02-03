import React from "react";

const WhatsForDinner = () => {
  return (
    <div className="column">
      <div className="card has-background-white-bis">
        <header className="card-header has-background-white-ter">
          <h3 className="card-header-title">
            <span>What's For Dinner?</span>
          </h3>
        </header>
        <div className="card-content">
          <figure className="image is-16by9">
            <img
              className="launch-image-modal"
              src="https://i.imgur.com/7E4oImB.png"
              alt="What's For Dinner?"
            />
          </figure>
          <div className="content portfolio-content has-background-white-bis">
            <p>
              A meal plan generator browser-based app that allows the user to
              save searched recipes to weekly meal planner. This app is
              developed because busy parents often run out of ideas what to feed
              their children for dinner, and other caregivers have no clue what
              the meal plan is. In addition, keywords about kid-friendly dinner
              ideas and meal planning are frequently searched for in google.
            </p>
          </div>
          <div className="field is-grouped-multiline">
            <div className="control">
              <div className="tags">
                <div className="tag is-primary">HTML/CSS</div>
                <div className="tag is-primary">JavaScript</div>
                <div className="tag is-success">Bulma</div>
                <div className="tag is-success">jQuery</div>
                <div className="tag is-success">AJAX</div>
                <div className="tag is-link">NoSQL</div>
                <div className="tag is-link">Firebase</div>
                <div className="tag is-dark">Responsive Web Design</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="https://github.com/keenwilson/WhatsForDinner-WeeklyMealPlanner"
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item portfolio-link"
          >
            <p>
              <i className="fab fa-github" /> View Source
            </p>
          </a>
          <a
            href="http://keenwilson.com/WhatsForDinner-WeeklyMealPlanner/"
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

export default WhatsForDinner;
