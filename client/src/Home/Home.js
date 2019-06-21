import React from "react";
import "./Home.css";
import SearchForm from "./SearchForm/SearchForm";

const Home = props => {
  return (
    <div className="wrapper">
      <div className="content-box">
        <h1 className="header-text">Mars Photo By Curiosity</h1>
        <SearchForm history={props.history} />
      </div>
    </div>
  );
};

export default Home;
