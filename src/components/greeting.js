import React from "react";

const Greeting = () => {
  return (
    <div className="container has-text-centered">
      <h1 className="title has-text-weight-light">
        <p>
          <i className="fas fa-laptop-code hvr-grow" />
        </p>
        <p
          href=""
          className="typewrite"
          data-period="2000"
          data-type='[ "Hi, Im Keen!", "I am Web Developer.", "I Love Coding!", "สวัสดีค่ะ !" ]'
        >
          <span className="wrap" />
        </p>
      </h1>
      <br />
      <h2 className="subtitle has-text-weight-light greeting-padding">
        Hi, I'm Keen. Nice to meet you.{" "}
        <i className="far fa-smile-wink hvr-grow" /> <br />
        I am a software developer with programming experience in full-stack
        JavaScript, User Interface (UI) frameworks/libraries (React, Angular,
        Vue), and database relationships and modeling (Python3, SQL, MongoDB,
        Firebase).
        <br /> <br />I enjoy collaborating with a team to build user-focused web
        applications, solving complicated problems, and delivering clean,
        functional, well-documented software.
      </h2>

      <div className="level">
        <div className="level-item">
          <figure className="image launch-about-me-modal">
            <img
              className="is-rounded avatar"
              src="https://i.imgur.com/dHmMsVmm.jpg"
              alt="profile"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
