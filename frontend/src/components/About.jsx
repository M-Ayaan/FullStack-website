import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
            </div>
            <p className="mid">
              <br /> <br />
              <b>Our mission</b> is to simplify the process of reserving a table
              at your favorite restaurant, ensuring that your culinary journey
              is as smooth and enjoyable as possible.
              <br />
              <br />
              <b>
                Who We Are <br />{" "}
              </b>
              <br /> Al Anood is a team of passionate food enthusiasts and
              tech-savvy innovators committed to revolutionizing the way you
              dine out. We understand the importance of a seamless reservation
              experience, whether you're planning a romantic dinner, a family
              gathering, or a business meeting.
              <br /> <br /> <br />
              <b> Our Story</b> <br />
              Al Anood was born out of a desire to bridge the gap. We recognized
              the need for a platform that could effortlessly connect people
              with the best dining spots in town, without the hassle of long
              waits or missed opportunities.
            </p>{" "}
            <br />
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img
              src="./OUTSIDE.jpg"
              class="anood"
              alt="about"
              width={20}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
