import React, { Component } from "react";
import Header from "./components/header";
import Greeting from "./components/greeting";
import Tabs from "./components/tabs";
import Footer from "./components/footer";
import HeroFooter from "./components/heroFooter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero site-header is-fullheight">
          <div className="hero-head">
            <Header />
          </div>

          <div className="hero-body">
            <Greeting />
          </div>
          <div className="hero-foot">
            <HeroFooter />
          </div>
        </section>
        <section>
          <div className="container">
            <Tabs />
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
