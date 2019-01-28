import React from "react";

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <figure className="image is-64x64">
            <img
              className="is-rounded hvr-grow"
              src="https://i.imgur.com/24AJBmNs.png"
              alt="logo"
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
