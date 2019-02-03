import React from "react";
import ReactMaliThaiBistro from "../portfolio/reactMaliThaiBistro";
import ChristmasList from "../portfolio/christmasList";
import GoogleBooksSearch from "../portfolio/googleBooksSearch";
import AbacusClassRecord from "../portfolio/abacusClassRecord";

const Frameworks = () => {
  return (
    <React.Fragment>
      <div className="columns ">
        <AbacusClassRecord />

        <ReactMaliThaiBistro />
        <ChristmasList />
      </div>
      <div className="columns ">
        <GoogleBooksSearch />
        <div className="column" />
        <div className="column" />
      </div>
    </React.Fragment>
  );
};

export default Frameworks;
