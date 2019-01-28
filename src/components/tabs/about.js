import React from "react";

const About = () => {
  return (
    <section className="modal-card-body has-background-white-bis">
      <div className="level">
        <div className="level-item">
          <figure className="image launch-about-me-modal">
            <img
              className="is-rounded avatar"
              src="https://i.imgur.com/dHmMsVmm.jpg"
              alt="profile picture"
            />
          </figure>
        </div>
        <div>
          <article className="message has-background-cream">
            <div className="message-body message-body-text">
              <p className="subtitle is-6 has-text-weight-light has-text-centered">
                Summary
              </p>
              <p>
                Software Developer specializing in JavaScript MERN stack (Mongo,
                Express, React and Node.js) with a background in brand
                management, and marketing.
                <br />
                <br />
                Enjoy building user-focus web applications, solving complicated
                problems, and being part of collaborative teams.
              </p>
            </div>
          </article>
          <article className="message has-background-cream">
            <div className="message-body message-body-text">
              <p className="subtitle is-6 has-text-weight-light has-text-centered">
                Education
              </p>
              <p>
                Holds an MBA with an emphasis on Marketing from the University
                of North Carolina and graduated from the University of Kansas
                Full Stack Web Development Coding Boot Camp.
              </p>
            </div>
          </article>
          <article className="message has-background-cream">
            <div className="message-body message-body-text">
              <p className="subtitle is-6 has-text-weight-light has-text-centered">
                Technical Skills
              </p>
              <ul>
                <li>
                  <strong>Web development:</strong> HTML5, CSS3, JavaScript,
                  Node.js, Express
                </li>
                <li>
                  <strong>Client-side JavaScript:</strong> React, React Native,
                  Vue.js, Angular for user interfaces and RESTful API
                  communications
                </li>
                <li>
                  <strong>Database relationships and modeling:</strong> MySQL,
                  Firebase (NoSQL), MongoDB
                </li>
                <li>
                  <strong>User Authentication:</strong> OAuth, Passport, JSON
                  Web Tokens, Bcrypt
                </li>
                <li>
                  <strong>Popular libraries:</strong> jQuery, Bootstrap, Bulma,
                  Vuex, Vuetify, Mongoose, Sequelize
                </li>
                <li>
                  <strong>Others:</strong> ESLint, MVC, Version Control, Git,
                  Github, Heroku, Search Engine Optimization (SEO), Semantic
                  HTML, WCAG 2.1, Responsive Web Design, Google Analytics,
                  Visual Studio Code, and Adobe Photoshop
                </li>
              </ul>
            </div>
          </article>
          <article className="message  has-background-cream">
            <div className="message-body message-body-text">
              <p className="subtitle is-6 has-text-weight-light has-text-centered">
                Relevant Experience
              </p>
              <p>
                Experienced Account Manager for over eight years at a top global
                advertising agency. Have led cross-functional teams on projects
                which created promotional materials for consumer goods clients,
                and involved Social Media Marketing, and Search Engine
                Optimization (SEO).
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
