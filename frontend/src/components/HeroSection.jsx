import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">

          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
              <h1 className="tittle">"Reserve Your Table, Savor Every Moment."<br/>
              </h1>
                <br /><br /><p >We believe that the best dining experiences begin long before you take your first bite. </p> <br />
                <h1 className="title dishes_title">Dining Made Easy.</h1>
                <br /><br />
                <img src="./threelines.svg" alt="threelines" />
              </div> 
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
