import React from "react";
import Bamazon from "../portfolio/bamazon";
import ConstructorWord from "../portfolio/constructorWord";
import LiriNode from "../portfolio/liriNode";

const CommandLine = () => {
  return (
    <div className="container">
      <h2 class="subtitle has-text-weight-light has-text-centered">
        Command line interface (CLI) Apps
      </h2>
      <p class="has-text-weight-light has-text-centered">
        Screenshots and gifs showing the app working with no bugs could be found
        on GitHub pages.
      </p>
      <br />
      <div class="columns">
        <Bamazon />
        <ConstructorWord />
        <LiriNode />
      </div>
    </div>
  );
};

export default CommandLine;
