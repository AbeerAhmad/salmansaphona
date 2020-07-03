import React from "react";
import PropTypes from "prop-types";
import Header2 from "../Header/header2.js";
import { Container } from "reactstrap";
import "./About.css";

function About(props) {
  return (
    <div className="aboutMainContainer">
      <div>
        <Header2 />
      </div>
      <Container>
        <div className="aboutContainer">
          <div className="aboutImgContainer">
            <img
              className="aboutImg"
              src="https://cdn.lulusar.com/media/wysiwyg/Screen_Shot_2019-01-15_at_3.18.20_PM.png"
              alt=""
            />
          </div>
          <div className="aboutTextContainer">
            <h1 className="aboutH1">
              DAILY FUSION WEAR FOR FASHION CONSCIOUS WOMEN
            </h1>
            <p className="aboutp">
              Our products are minimal yet experimental, functional yet
              versatile and most importantly affordable. For fresh aesthetics
              and timeless elegance Lulusar is your only choice.
            </p>
          </div>
        </div>
        <div>
          <hr className="abouthr" />
        </div>

        <div className="aboutContainer">
          <div className="aboutTextContainer " id="aboutTextContainer2">
            <h1 className="aboutH1" id="aboutH1-2">
              WE CONVERT IDEAS INTO REALITY
            </h1>
            <p className="aboutp">
              We are fast fashion brand that is data driven & makes designs as
              per what our customers want. We focus on the future, work on
              expansion and strive to be the best for you. You demand, we create
            </p>
          </div>
          <div className="aboutImgContainer">
            <img
              className="aboutImg"
              src="https://cdn.lulusar.com/media/wysiwyg/Screen_Shot_2019-01-15_at_3.18.20_PM.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

About.propTypes = {};

export default About;
