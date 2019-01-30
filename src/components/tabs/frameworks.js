import React from "react";
import ReactMaliThaiBistro from "../portfolio/reactMaliThaiBistro";
import ChristmasList from "../portfolio/christmasList";
import GoogleBooksSearch from "../portfolio/googleBooksSearch";

const Frameworks = () => {
  return (
    <div className="columns ">
      <GoogleBooksSearch />
      <ReactMaliThaiBistro />
      <ChristmasList />
    </div>
  );
};

export default Frameworks;
