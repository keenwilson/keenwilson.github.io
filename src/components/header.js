import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleAboutClick() {
    this.props.onAboutClick();
  }

  handleContactClick() {
    this.props.onContactClick();
  }
  render() {
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
            <a className="navbar-item " onClick={this.handleAboutClick}>
              About Me
            </a>
            <a href="#portfolio" className="navbar-item">
              Portfolio
            </a>
            <a
              href="#contact"
              className="navbar-item"
              onClick={this.handleContactClick}
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
