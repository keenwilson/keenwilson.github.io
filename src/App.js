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
      showContact: true
    };
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
  }

  toggleAbout() {
    this.setState(prevState => ({
      showAbout: !prevState.showAbout
    }));
    console.log("showAbout", this.state.showAbout);
  }

  toggleContact() {
    this.setState(prevState => ({
      showContact: !prevState.showContact
    }));
    console.log("showContact", this.state.showContact);
  }
  render() {
    return (
      <React.Fragment>
        <section className="hero site-header is-fullheight">
          <div className="hero-head">
            <Header
              onAboutClick={this.toggleAbout}
              onContactClick={this.toggleContact}
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
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
