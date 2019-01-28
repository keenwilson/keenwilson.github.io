import React from "react";
import WhatsForDinner from "../portfolio/whatsForDinner";
import RpsMultiplayer from "../portfolio/rpsMultiplayer";
import GifTastic from "../portfolio/gifTastic";
import DogTrivia from "../portfolio/dogTrivia";
import TravelWordGuess from "../portfolio/travelWordGuess";
import HarryPotterRPG from "../portfolio/harryPotterRPG";

const DynamicWeb = () => {
  return (
    <div className="container">
      <h2 class="subtitle has-text-weight-light has-text-centered">
        Dynamic Browser-based Apps
      </h2>
      <p class="has-text-weight-light has-text-centered">
        Implementing JavaScript logic, user interface (UI) design,
        object-oriented programming (OOP), and state management
      </p>
      <br />
      <div class="columns">
        <WhatsForDinner />
        <RpsMultiplayer />
        <GifTastic />
      </div>
      <div class="columns">
        <DogTrivia />
        <TravelWordGuess />
        <HarryPotterRPG />
      </div>
    </div>
  );
};

export default DynamicWeb;
