import React from "react";
import "./css/footer.css";
import { Container, Row, Col } from "reactstrap";
import WhatsappIcon from "./Icons/WhatsappIcon.png";
import MessengerIcon from "./Icons/MessengerIcon.png";
import FbIcon from "./Icons/FbIcon.png";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer_Most_main_div">
        <div className="footer_main_div">
          <Row>
            <Col xs="6" sm="4">
              <div className="aboutUs_Col_div">
                <ul className="aboutus_tilte_ul">
                  <li>
                    <h4 style={{ color: " rgba(0, 0, 0, 0.65)" }}>
                      {" "}
                      About Us{" "}
                    </h4>
                  </li>
                </ul>
                <ul>
                  <li>Return & Exchange Policy</li>
                  <li>About Us</li>
                  <li>Delivery All Over Pakistan</li>
                </ul>
              </div>
            </Col>
            <Col xs="6" sm="4">
              <div className="Help_Col_div">
                <ul className="Help_tilte_ul">
                  <li>
                    <h4 style={{ color: " rgba(0, 0, 0, 0.65)" }}> Help </h4>
                  </li>
                </ul>
                <ul>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </Col>
            <Col sm="4">
              <div className="Social_Col_div">
                <ul className="Social_tilte_ul">
                  <li>
                    <h4 style={{ color: " rgba(0, 0, 0, 0.65)" }}> Social </h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    Follow Us On Facebook , Instagram To Get Updated To our New
                    Deals And Prducts
                  </li>
                  <li style={{fontSize:'20px'}}>
                    <span className="font-header">
                      <FaFacebookF />
                    </span>
                    &nbsp; &nbsp; &nbsp;
                    <span className="font-header">
                      <FaPinterestP />
                    </span>
                    &nbsp; &nbsp; &nbsp;
                    <span className="font-header">
                      <FaInstagram />
                    </span>
                    &nbsp; &nbsp; &nbsp;
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Footer;
