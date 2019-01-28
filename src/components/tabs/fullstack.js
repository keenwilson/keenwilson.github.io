import React from "react";
import NytScraper from "../portfolio/nytScraper";
import FriendFinder from "../portfolio/friendFinder";
import Burger from "../portfolio/burger";

const FullStack = () => {
  return (
    <div className="columns">
      <NytScraper />
      <FriendFinder />
      <Burger />
    </div>
  );
};

export default FullStack;
