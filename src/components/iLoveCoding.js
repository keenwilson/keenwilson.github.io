import React from "react";

const ILoveCoding = () => {
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
    </div>
  );
};

export default ILoveCoding;
