import React from "react";
import "./NoPage.css"; 
import check from "../imgs/check.jpg";
import home from "../imgs/home.jpg";
import {Link} from "react-router-dom";

function NoPage() {
  return (
    <>
    <div className="center-container">
      <div className="nopage-page">
        <NoOrderMessage />
        <div className="home-button">
        <Link to="/home">
        <button className="home-button"><img className ='house' src= {home} alt="home-button"/></button>
        </Link>
        </div>
      </div>
    </div>  
    </>
  );
}

function NoOrderMessage() {
  return (
    <div className="message">
      <h2><img className ='check' src= {check} alt="check"/>No results</h2>
    </div>
  );
}

export default NoPage;