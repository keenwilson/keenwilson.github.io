import React, { Component } from "react";
import Header from "./components/header";
import Greeting from "./components/greeting";
import Tabs from "./components/tabs";
import Footer from "./components/footer";
import HeroFooter from "./components/heroFooter";
import "./App.css";
import ILoveCoding from "./components/iLoveCoding";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
      messageSent: false
    };
    this.toggleAbout = this.toggleAbout.bind(this);
    this.showContact = this.showContact.bind(this);
    this.handleMessageSent = this.handleMessageSent.bind(this);
  }

  toggleAbout() {
    this.setState(prevState => ({
      showAbout: !prevState.showAbout
    }));
  }

  showContact() {
    this.setState({
      messageSent: false
    });
  }

  handleMessageSent() {
    this.setState({
      messageSent: true
    });
  }
  render() {
    return (
      <React.Fragment>
        <section className="hero site-header is-fullheight">
          <div className="hero-head">
            <Header
              onAboutClick={this.toggleAbout}
              onContactClick={this.showContact}
            />
          </div>

          <div className="hero-body">
            <ILoveCoding />
          </div>
          <div className="hero-foot">
            {this.state.showAbout && <Greeting />}
            <HeroFooter />
          </div>
        </section>
        <section>
          <div id="portfolio" className="container">
            <Tabs />
          </div>
        </section>
        <div id="contact">
          <Footer
            key={this.state.messageSent}
            messageSent={this.state.messageSent}
            onSubmit={this.handleMessageSent}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
